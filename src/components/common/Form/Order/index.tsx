'use client';

import React, { useEffect } from 'react';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';

import { useForm } from 'react-hook-form';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

// const ORDER_FORM_FIELD_NAME = {
//     PRICE: 'price',
// } as const;

export type OrderFormFields = {
    title: string;
    price: string;
};

// export type OrderFormFields = Record<(typeof ORDER_FORM_FIELD_NAME)[keyof typeof ORDER_FORM_FIELD_NAME], string>;

// export type OrderItemProps = {}
export type OrderItemSummariesProps = {
    value: number | string;
    label: string;
    allowMultiple?: boolean;
};

export type OrderItemProps = {
    title: string;
    handle: string;
    items: OrderItemSummariesProps[];
};

export type OrderProps = {
    title: string;
    // pricing:
    summaries: OrderItemProps[];
};

const Order = ({ title, summaries }: OrderProps): React.ReactElement => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<OrderFormFields>();

    const submitHandler = (data: OrderFormFields) => {
        console.log('submit', data);
    };

    useEffect(() => {
        setValue('title', title);
    }, [title, setValue]);

    useEffect(() => {
        summaries.forEach((item: OrderItemProps) => {
            if (item.items.length === 1) {
                setValue(item.handle as any, item.items[0].value);
            }
        });
    }, [summaries, setValue]);

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Columns.Row className="justify-center">
                {summaries.map((item: OrderItemProps, i: number) => {
                    const isMultiple = item.items.length > 1;
                    const items = isMultiple ? item.items : item.items[0];

                    return (
                        <Columns.Column
                            key={i}
                            width={{ md: 4 }}>
                            <Heading
                                as="h4"
                                className="mb-1 text-[3.7rem]">
                                {item.title}
                            </Heading>

                            {!isMultiple && !Array.isArray(items) && <p>{items.label}</p>}

                            {isMultiple &&
                                Array.isArray(items) &&
                                items.map((itm: OrderItemSummariesProps, idx: number) => {
                                    return (
                                        <Input
                                            key={idx}
                                            type={itm.allowMultiple ? 'radio' : 'radio'}
                                            id={`${item.handle}-${itm.value}`}
                                            value={itm.value}
                                            checked={idx === 0}
                                            hook={{
                                                register,
                                                name: item.handle,
                                            }}>
                                            {itm.label}
                                        </Input>
                                    );
                                })}
                            {/*<Input*/}
                            {/*    type="radio"*/}
                            {/*    id="radio-260000"*/}
                            {/*    value={260000}*/}
                            {/*    hook={{*/}
                            {/*        register,*/}
                            {/*        name: 'price',*/}
                            {/*    }}>*/}
                            {/*    260.000 (Round 15cm)*/}
                            {/*</Input>*/}
                            {/*<Input*/}
                            {/*    type="radio"*/}
                            {/*    id="radio-250000"*/}
                            {/*    value={250000}*/}
                            {/*    hook={{*/}
                            {/*        register,*/}
                            {/*        name: 'price',*/}
                            {/*    }}>*/}
                            {/*    250.000 (Square 16cm x 16cm)*/}
                            {/*</Input>*/}
                        </Columns.Column>
                    );
                })}

                {/*<Columns.Column width={{ md: 4 }}>*/}
                {/*    <Heading*/}
                {/*        as="h4"*/}
                {/*        className="mb-1 text-[3.7rem]">*/}
                {/*        Price*/}
                {/*    </Heading>*/}

                {/*    <Input*/}
                {/*        type="radio"*/}
                {/*        id="radio-260000"*/}
                {/*        value={260000}*/}
                {/*        hook={{*/}
                {/*            register,*/}
                {/*            name: 'price',*/}
                {/*        }}>*/}
                {/*        260.000 (Round 15cm)*/}
                {/*    </Input>*/}
                {/*    <Input*/}
                {/*        type="radio"*/}
                {/*        id="radio-250000"*/}
                {/*        value={250000}*/}
                {/*        hook={{*/}
                {/*            register,*/}
                {/*            name: 'price',*/}
                {/*        }}>*/}
                {/*        250.000 (Square 16cm x 16cm)*/}
                {/*    </Input>*/}
                {/*</Columns.Column>*/}

                {/*<Columns.Column width={{ md: 4 }}>*/}
                {/*    <Heading*/}
                {/*        as="h4"*/}
                {/*        className="mb-1 text-[3.7rem]">*/}
                {/*        Price*/}
                {/*    </Heading>*/}

                {/*    <p>Square 16cm x 16cm</p>*/}
                {/*</Columns.Column>*/}
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
