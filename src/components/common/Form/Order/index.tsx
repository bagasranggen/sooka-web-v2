'use client';

import React, { useEffect } from 'react';

import { BaseHookOptionProps } from '@/libs/@types';

import { useForm } from 'react-hook-form';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

export type OrderFormFields = {
    title: string;
    price: string;
    addOns: string;
    dimension: string;
};

export type OrderItemSummariesProps = {
    value: number | string;
    label: string | React.ReactNode;
};

export type OrderItemProps = {
    title: string;
    handle: string;
    allowMultiple?: boolean;
    items: OrderItemSummariesProps[];
} & Pick<BaseHookOptionProps, 'required'>;

export type OrderProps = {
    title: string;
    summaries: OrderItemProps[];
};

const Order = ({ title, summaries }: OrderProps): React.ReactElement => {
    const { register, handleSubmit, setValue } = useForm<OrderFormFields>();

    let isTwoColumn = false;
    if (summaries && summaries.length === 2) isTwoColumn = true;

    const submitHandler = (data: OrderFormFields) => {
        console.log('submit', data);
    };

    useEffect(() => {
        setValue('title', title);
    }, [title, setValue]);

    useEffect(() => {
        summaries.forEach((item: OrderItemProps) => {
            if (item.items.length === 1 && item.required) {
                setValue(item.handle as any, item.items[0].value);
            }
        });
    }, [summaries, setValue]);

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Columns.Row
                className="justify-center"
                spacing={{ x: 3, y: 3 }}>
                {summaries.map((item: OrderItemProps, i: number) => {
                    const isMultiple = !!(item.items.length > 1 || item.allowMultiple);
                    const items = isMultiple ? item.items : item.items[0];

                    return (
                        <Columns.Column
                            key={i}
                            width={{
                                xs: 12,
                                md: isTwoColumn ? 5 : 4,
                                lg: isTwoColumn ? 5 : 4,
                            }}>
                            <Heading
                                as="h4"
                                className="md:mb-1 text-md md:text-[2.4rem] lg:text-[3.7rem]">
                                {item.title}
                            </Heading>

                            {!isMultiple && !Array.isArray(items) && <p>{items.label}</p>}

                            {isMultiple &&
                                Array.isArray(items) &&
                                items.map((itm: OrderItemSummariesProps, idx: number) => {
                                    return (
                                        <Input
                                            key={idx}
                                            type={item.allowMultiple ? 'checkbox' : 'radio'}
                                            id={`${item.handle}-${itm.value}`}
                                            value={itm.value}
                                            checked={!item.allowMultiple && idx === 0}
                                            hook={{
                                                register,
                                                name: item.handle,
                                                required: item.required,
                                            }}>
                                            {itm.label}
                                        </Input>
                                    );
                                })}
                        </Columns.Column>
                    );
                })}
            </Columns.Row>

            <Button.Container
                className="mt-4 justify-center"
                items={[
                    {
                        children: (
                            <Button.Arrow
                                as="button"
                                type="submit">
                                Order Now
                            </Button.Arrow>
                        ),
                    },
                ]}
            />
        </form>
    );
};

export default Order;
