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

export const CART_ITEM_FORM_HANDLE = {
    CART_ITEM_ID: 'cartItemId',
    QUANTITY: 'qty',
} as const;

export type CartItemFormFields = {
    [CART_ITEM_FORM_HANDLE.CART_ITEM_ID]: string;
    [CART_ITEM_FORM_HANDLE.QUANTITY]: number;
};

export type CartItemProps = {
    cartItemId: string;
    title?: BaseProps['children'];
    media?: BasePictureProps['items'];
    variant?: React.ReactNode;
    price?: number;
    priceCurrency?: React.ReactNode;
    addOns?: string[];
    note?: React.ReactNode;
    qty: number;
    maxQty?: number;
    onSubmit?: (data: CartItemFormFields) => void;
    onRemove?: (data: CartItemFormFields) => void;
} & ClassnameProps;

const CartItem = ({
    className,
    cartItemId,
    title,
    media,
    variant,
    priceCurrency,
    addOns,
    note,
    qty,
    maxQty,
    onSubmit,
    onRemove,
}: CartItemProps): React.ReactElement => {
    const { register, handleSubmit, setValue, getValues } = useForm<CartItemFormFields>({
        defaultValues: {
            cartItemId,
            qty,
        },
    });
    const [data, setData] = useState<CartItemFormFields>();
    const minQty = 1;

    type UpdateQuantityHandlerProps = {
        cartId: CartItemProps['cartItemId'];
        type: 'increment' | 'decrement';
    };

    const updateQuantityHandler = ({ cartId, type = 'increment' }: UpdateQuantityHandlerProps) => {
        if (!cartId) {
            console.warn('no cartId is provided');
            return;
        }

        let updatedValue = getValues(CART_ITEM_FORM_HANDLE.QUANTITY);
        if (typeof updatedValue === 'number' && type === 'increment') updatedValue += 1;
        if (typeof updatedValue === 'number' && type === 'decrement') updatedValue -= 1;

        if (maxQty && updatedValue > maxQty) return;
        if (updatedValue < minQty) return;

        setValue(CART_ITEM_FORM_HANDLE.QUANTITY, updatedValue, {
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
                                    {priceCurrency && (
                                        <p className="max-lg:text-md lg:text-end tracking-0.1 uppercase font-bold">
                                            {priceCurrency}
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
                                                className="md:transition-colors md:hover:text-sooka-primary"
                                                onClick={() => {
                                                    if (onRemove) onRemove({ cartItemId, qty: 0 });
                                                }}>
                                                <Trash size={15} />
                                            </Button>
                                        </Columns.Column>

                                        <Columns.Column xs="auto">
                                            <Quantity
                                                input={{
                                                    type: 'number',
                                                    disabled: true,
                                                    // value: qty,
                                                    hook: {
                                                        register,
                                                        name: CART_ITEM_FORM_HANDLE.QUANTITY,
                                                        valueAsNumber: true,
                                                        min: minQty,
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
                                                    disabled: qty <= 1,
                                                    onClick: () => {
                                                        updateQuantityHandler({
                                                            cartId: cartItemId,
                                                            type: 'decrement',
                                                        });
                                                    },
                                                }}
                                                increment={{
                                                    type: 'submit',
                                                    disabled: maxQty ? qty >= maxQty : false,
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
