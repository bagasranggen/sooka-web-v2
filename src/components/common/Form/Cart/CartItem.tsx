'use client';

import React, { useState } from 'react';

import { ClassnameProps } from '@/libs/@types';

import { useForm } from 'react-hook-form';
import { useDebounce } from 'react-use';
import { Trash } from 'lucide-react';

import Heading, { BaseProps } from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Picture, { BaseProps as BasePictureProps } from '@/components/common/Picture';
import List from '@/components/common/List';
import Button from '@/components/common/Button';
import Quantity from '@/components/common/Quantity';

export type CartItemFormFields = Record<string, number>;

export type CartItemProps = {
    cartItemId: string;
    title?: BaseProps['children'];
    media?: BasePictureProps['items'];
    variant?: React.ReactNode;
    price?: React.ReactNode;
    addOns?: string[];
    note?: React.ReactNode;
    maxQty?: number;
    onSubmit?: (data: CartItemFormFields) => void;
} & ClassnameProps;

const CartItem = ({
    className,
    cartItemId,
    title,
    media,
    variant,
    price,
    addOns,
    note,
    maxQty,
    onSubmit,
}: CartItemProps): React.ReactElement => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
        watch,
    } = useForm<CartItemFormFields>();
    const [data, setData] = useState<CartItemFormFields>();

    watch(cartItemId);
    const quantity = getValues(cartItemId);

    type UpdateQuantityHandlerProps = {
        cartId: string;
        type: 'increment' | 'decrement';
    };

    const updateQuantityHandler = ({ cartId, type = 'increment' }: UpdateQuantityHandlerProps) => {
        if (!cartId) {
            console.warn('no cartId is provided');
            return;
        }

        let updatedValue = getValues(cartId);
        if (type === 'increment') updatedValue += 1;
        if (type === 'decrement') updatedValue -= 1;

        setValue(cartId, updatedValue, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };

    useDebounce(
        () => {
            if (onSubmit && data) onSubmit(data);
        },
        500,
        [data]
    );

    return (
        <form
            className={className}
            onSubmit={handleSubmit((data) => {
                setData(data);
            })}>
            <Columns gutterY={1}>
                <Columns.Column
                    xs={6}
                    md={3}>
                    {media && <Picture items={media} />}
                </Columns.Column>

                <Columns.Column md={9}>
                    <Columns
                        gutterX={2}
                        gutterY={3}>
                        <Columns.Column
                            md={12}
                            lg={9}>
                            {title && (
                                <Heading
                                    as="h2"
                                    className="text-[3rem] leading-3.5">
                                    {title}
                                </Heading>
                            )}

                            {variant && <p className="mt-1.5 mb-0">Variant: {variant}</p>}

                            {addOns && addOns.length > 0 && (
                                <>
                                    <div className="mt-1">Addon(s):</div>
                                    <List
                                        className="ms-1.5 list-disc"
                                        items={addOns.map((item) => {
                                            return {
                                                children: <p>{item}</p>,
                                            };
                                        })}
                                    />
                                </>
                            )}

                            {note && (
                                <>
                                    <div className="mt-1">Note:</div>
                                    {note}
                                </>
                            )}
                        </Columns.Column>

                        <Columns.Column
                            md={12}
                            lg={3}>
                            <Columns gutterY={2}>
                                <Columns.Column
                                    xs={7}
                                    lg={12}>
                                    {price && (
                                        <p className="max-lg:text-md lg:text-end tracking-0.1 uppercase font-bold">
                                            {price}
                                        </p>
                                    )}
                                </Columns.Column>

                                <Columns.Column
                                    xs={5}
                                    lg={12}>
                                    <Columns
                                        gutterX={1}
                                        className="items-center justify-end">
                                        <Columns.Column xs="auto">
                                            <Button
                                                as="button"
                                                type="button"
                                                className="md:transition-colors md:hover:text-sooka-primary">
                                                <Trash size={15} />
                                            </Button>
                                        </Columns.Column>

                                        <Columns.Column xs="auto">
                                            <Quantity
                                                input={{
                                                    type: 'number',
                                                    disabled: true,
                                                    // max: 5,
                                                    value: 1,
                                                    onChange: (e) => {
                                                        console.log('run');

                                                        register(cartItemId).onChange(e);
                                                    },
                                                    hook: {
                                                        register,
                                                        name: cartItemId,
                                                        valueAsNumber: true,
                                                        ...(maxQty
                                                            ? {
                                                                  max: {
                                                                      value: maxQty,
                                                                      message: 'Maximum value',
                                                                  },
                                                              }
                                                            : {}),
                                                    },
                                                }}
                                                decrement={{
                                                    type: 'submit',
                                                    disabled: quantity <= 1,
                                                    onClick: () => {
                                                        updateQuantityHandler({
                                                            cartId: cartItemId,
                                                            type: 'decrement',
                                                        });
                                                    },
                                                }}
                                                increment={{
                                                    type: 'submit',
                                                    disabled: maxQty ? quantity >= maxQty : false,
                                                    onClick: () => {
                                                        updateQuantityHandler({
                                                            cartId: cartItemId,
                                                            type: 'increment',
                                                        });
                                                    },
                                                }}
                                            />
                                        </Columns.Column>
                                    </Columns>
                                </Columns.Column>
                            </Columns>
                        </Columns.Column>
                    </Columns>
                </Columns.Column>
            </Columns>
        </form>
    );
};

export default CartItem;
