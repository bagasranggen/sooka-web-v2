'use client';

import React from 'react';

import { GENERAL_DELIVERY_TIME_ERROR, GENERAL_REQUIRED_ERROR_MESSAGE } from '@/libs/constants';
import { getCurrentDate } from '@/libs/utils';

import { useForm } from 'react-hook-form';

import Columns from '@/components/common/Columns';
import Input from '@/components/common/Input';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';

export const CART_ORDER_FORM_HANDLE = {
    NAME: 'name',
    PHONE_NUMBER: 'phoneNumber',
    TOTAL_PRICE: 'totalPrice',
    ORDER_COLLECTION: 'orderCollection',
    ORDER_COLLECTION_DATE: 'orderCollectionDate',
    ORDER_COLLECTION_TIME: 'orderCollectionTime',
    ADDRESS: 'address',
    ADDRESS_PINPOINT: 'addressPinpoint',
} as const;

export type CartOrderFormFields = {
    [CART_ORDER_FORM_HANDLE.NAME]: string;
    [CART_ORDER_FORM_HANDLE.PHONE_NUMBER]: string;
    [CART_ORDER_FORM_HANDLE.TOTAL_PRICE]: number;
    [CART_ORDER_FORM_HANDLE.ORDER_COLLECTION]: string;
    [CART_ORDER_FORM_HANDLE.ORDER_COLLECTION_DATE]: string;
    [CART_ORDER_FORM_HANDLE.ORDER_COLLECTION_TIME]: string;
    [CART_ORDER_FORM_HANDLE.ADDRESS]: string;
    [CART_ORDER_FORM_HANDLE.ADDRESS_PINPOINT]: string;
};

export type CartOrderProps = {
    price?: number;
    priceCurrency?: React.ReactNode;
    note?: React.ReactNode;
    onSubmit?: (data: CartOrderFormFields) => void;
};

const CartOrder = ({ price, priceCurrency, note, onSubmit }: CartOrderProps): React.ReactElement => {
    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
    } = useForm<CartOrderFormFields>({
        mode: 'onChange',
        defaultValues: {
            totalPrice: price ?? 0,
        },
    });

    watch(CART_ORDER_FORM_HANDLE.ORDER_COLLECTION);
    const orderCollection = getValues(CART_ORDER_FORM_HANDLE.ORDER_COLLECTION);

    return (
        <form
            onSubmit={handleSubmit((data) => {
                if (onSubmit) onSubmit(data);
            })}>
            <Heading
                as="h2"
                className="text-[2.5rem] md:text-[3rem] leading-2.5 md:leading-3.5 max-lg:mb-0.5">
                Order Details
            </Heading>

            {note && <small className="block text-[1.2rem] leading-1.5 mb-0.5">{note}</small>}

            <Columns gutterY={{ xs: 1, xl: 4 }}>
                <Columns.Column
                    xs={12}
                    lg={8}
                    xl={12}>
                    <Columns
                        gutterY={1}
                        gutterX={2}>
                        <Columns.Column md={12}>
                            <Input.Label
                                type="text"
                                size="sm"
                                id={CART_ORDER_FORM_HANDLE.NAME}
                                label="Name"
                                hook={{
                                    register,
                                    name: CART_ORDER_FORM_HANDLE.NAME,
                                    required: GENERAL_REQUIRED_ERROR_MESSAGE,
                                }}
                                error={errors?.[CART_ORDER_FORM_HANDLE.NAME]?.message}
                            />
                        </Columns.Column>
                        <Columns.Column md={12}>
                            <Input.Label
                                type="tel"
                                size="sm"
                                id={CART_ORDER_FORM_HANDLE.PHONE_NUMBER}
                                label="Contact Number"
                                hook={{
                                    register,
                                    name: CART_ORDER_FORM_HANDLE.PHONE_NUMBER,
                                    required: GENERAL_REQUIRED_ERROR_MESSAGE,
                                }}
                                error={errors?.[CART_ORDER_FORM_HANDLE.PHONE_NUMBER]?.message}
                            />
                        </Columns.Column>

                        <Columns.Column xs={6}>
                            <Input.Label
                                type="date"
                                size="sm"
                                min={getCurrentDate()}
                                id={CART_ORDER_FORM_HANDLE.ORDER_COLLECTION_DATE}
                                label="Order Date"
                                hook={{
                                    register,
                                    name: CART_ORDER_FORM_HANDLE.ORDER_COLLECTION_DATE,
                                    required: GENERAL_REQUIRED_ERROR_MESSAGE,
                                }}
                                error={errors?.[CART_ORDER_FORM_HANDLE.ORDER_COLLECTION_DATE]?.message}
                            />
                        </Columns.Column>

                        <Columns.Column xs={6}>
                            <Input.Label
                                type="time"
                                size="sm"
                                // step={900}
                                id={CART_ORDER_FORM_HANDLE.ORDER_COLLECTION_TIME}
                                label="Time"
                                hook={{
                                    register,
                                    name: CART_ORDER_FORM_HANDLE.ORDER_COLLECTION_TIME,
                                    required: GENERAL_REQUIRED_ERROR_MESSAGE,
                                    min: {
                                        value: '08:00',
                                        message: GENERAL_DELIVERY_TIME_ERROR,
                                    },
                                    max: {
                                        value: '20:00',
                                        message: GENERAL_DELIVERY_TIME_ERROR,
                                    },
                                }}
                                error={errors?.[CART_ORDER_FORM_HANDLE.ORDER_COLLECTION_TIME]?.message}
                            />
                        </Columns.Column>

                        <Columns.Column md={12}>
                            <Input.Label
                                type="select"
                                size="sm"
                                id={CART_ORDER_FORM_HANDLE.ORDER_COLLECTION}
                                label="Order Collection"
                                items={[
                                    {
                                        value: 'pickup',
                                        children: 'Pick Up',
                                    },
                                    {
                                        value: 'delivery',
                                        children: 'Delivery',
                                    },
                                ]}
                                hook={{
                                    register,
                                    name: CART_ORDER_FORM_HANDLE.ORDER_COLLECTION,
                                    required: GENERAL_REQUIRED_ERROR_MESSAGE,
                                }}
                                error={errors?.[CART_ORDER_FORM_HANDLE.ORDER_COLLECTION]?.message}
                            />
                        </Columns.Column>

                        {orderCollection === 'delivery' && (
                            <>
                                <Columns.Column md={12}>
                                    <Input.Label
                                        type="text"
                                        size="sm"
                                        id={CART_ORDER_FORM_HANDLE.ADDRESS}
                                        label="Location"
                                        hook={{
                                            register,
                                            name: CART_ORDER_FORM_HANDLE.ADDRESS,
                                            required: true,
                                        }}
                                        error={errors?.[CART_ORDER_FORM_HANDLE.ADDRESS]?.message}
                                    />
                                </Columns.Column>

                                <Columns.Column md={12}>
                                    <Input.Label
                                        type="text"
                                        size="sm"
                                        id={CART_ORDER_FORM_HANDLE.ADDRESS_PINPOINT}
                                        label="Location Pinpoint"
                                        hook={{
                                            register,
                                            name: CART_ORDER_FORM_HANDLE.ADDRESS_PINPOINT,
                                            required: true,
                                        }}
                                        error={errors?.[CART_ORDER_FORM_HANDLE.ADDRESS_PINPOINT]?.message}
                                    />
                                </Columns.Column>
                            </>
                        )}
                    </Columns>
                </Columns.Column>

                <Columns.Column
                    xs={12}
                    lg={4}
                    xl={12}>
                    <Columns
                        gutterX={1}
                        className="items-center">
                        <Columns.Column>
                            <Heading
                                as="h2"
                                className="text-[2.5rem] md:text-[3rem] leading-2.5 md:leading-3.5">
                                Total
                            </Heading>
                            {priceCurrency && (
                                <p className="text-md uppercase tracking-0.1 font-bold">{priceCurrency}</p>
                            )}
                        </Columns.Column>

                        <Columns.Column
                            xs={6}
                            md={'auto'}
                            lg={12}
                            xl={'auto'}
                            className="lg:max-xl:text-center text-end">
                            <Button.Arrow
                                as="button"
                                type="submit">
                                Order By <span className="sm:hidden">WA</span>
                                <span className="max-sm:hidden">Whatsapp</span>
                            </Button.Arrow>
                        </Columns.Column>
                    </Columns>
                </Columns.Column>
            </Columns>
        </form>
    );
};

export default CartOrder;
