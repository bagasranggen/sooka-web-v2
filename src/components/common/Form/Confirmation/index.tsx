'use client';

import React, { useEffect, useMemo } from 'react';

import { ClassnameProps, FormOnSubmitProps } from '@/libs/@types';
import { getCurrentDate } from '@/libs/utils';

import { useForm } from 'react-hook-form';

import Input, { BaseInputSelectProps, LabelText } from '@/components/common/Input';
import Button from '@/components/common/Button';
import Columns from '@/components/common/Columns';
import { CONFIRMATION_FORM_INPUT, ORDER_COLLECTIONS_OPTIONS } from '@/components/common/Form/Confirmation/handles';

export type ConfirmationFormFields = {
    orderDate: string;
    orderName: string;
    orderRecipientName: string;
    orderContact: string;
    orderContactRecipient: string;
    orderSelection: string;
    orderSelectionTitle: string;
    orderSelectionVariant: string;
    orderSelectionPrice: number;
    orderSelectionAddon: [string];
    orderSelectionAddonPrice: number;
    orderSelectionTotalPrice: number;
    orderCollection: string;
    orderCollectionTime: string;
    orderPinPoint: string;
    orderNotes: string;
};

export type ProductsVariantItemProps = {
    slug: string;
} & Partial<Record<'variants' | 'prices' | 'addons' | 'addonsPrice', BaseInputSelectProps['items']>>;

export type ConfirmationProps = {
    onSubmit?: FormOnSubmitProps<ConfirmationFormFields>;
    products?: BaseInputSelectProps['items'];
    productsVariant?: ProductsVariantItemProps[];
} & (ClassnameProps & Partial<Record<'isProcessing' | 'isCompleted' | 'isError', boolean>>);

const Confirmation = ({
    className,
    products,
    productsVariant,
    onSubmit,
    isCompleted,
    isProcessing,
    isError,
}: ConfirmationProps): React.ReactElement => {
    const {
        register,
        getValues,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<ConfirmationFormFields>({ mode: 'onChange' });

    const submitHandler = (data: ConfirmationFormFields) => {
        if (onSubmit) onSubmit(data);
    };

    watch(CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME);
    watch(CONFIRMATION_FORM_INPUT.ORDER_SELECTION.NAME);
    watch(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME);
    watch(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME);

    const selectedProduct = getValues(CONFIRMATION_FORM_INPUT.ORDER_SELECTION.NAME);
    const selectedProductVariant = getValues(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME);
    const selectedAddons = getValues(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME);
    const selectedOrderCollection = getValues(CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME);

    const orderSelected = useMemo(() => {
        let data: undefined | ProductsVariantItemProps = undefined;

        if (selectedProduct && productsVariant && productsVariant.length > 0) {
            const selected = productsVariant.find((item) => item.slug === selectedProduct);

            if (selected) data = selected;
        }

        return data;
    }, [selectedProduct, productsVariant]);

    const orderPrice = useMemo(() => {
        let data: number = 0;

        if (orderSelected) {
            const items = orderSelected?.prices;
            const price = items?.find((item) => item.value === selectedProductVariant)?.children as number;

            if (price) data = price;
        }

        return data;
    }, [orderSelected, selectedProductVariant]);

    const orderAddonPrice = useMemo(() => {
        let data = 0;

        if (!orderSelected?.addons || orderSelected.addons.length === 0) return data;
        if (!orderSelected?.addonsPrice || orderSelected.addonsPrice.length === 0) return data;
        if (!selectedAddons) return data;
        if (!Array.isArray(selectedAddons)) return data;

        const addonsIndexes: number[] = [];
        const addonsPrices: number[] = [];

        if (selectedAddons.length > 0) {
            selectedAddons.forEach((item) => {
                const index = orderSelected?.addons?.findIndex((addon) => addon.value === item);

                if (index) addonsIndexes.push(index);
            });
        }

        if (addonsIndexes.length > 0) {
            addonsIndexes.forEach((item) => {
                const price = orderSelected?.addonsPrice?.[item]?.value;

                if (price && typeof price === 'number') addonsPrices.push(price);
            });
        }

        data = addonsPrices.reduce((acc, curr) => acc + curr, 0);

        return data;
    }, [selectedAddons, orderSelected?.addons, orderSelected?.addonsPrice]);

    const orderTitle = useMemo(() => {
        let data: undefined | string = undefined;

        if (selectedProduct && typeof selectedProduct === 'string') data = selectedProduct;

        if (selectedProductVariant) data += ` (${selectedProductVariant})`;

        if (data) setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_TITLE.NAME, data);

        return data;
    }, [selectedProduct, selectedProductVariant]);

    useEffect(() => {
        setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_PRICE.NAME, orderPrice);
        setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON_PRICE.NAME, orderAddonPrice);
        setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_TOTAL_PRICE.NAME, orderPrice + orderAddonPrice);
    }, [orderPrice, orderAddonPrice]);

    useEffect(() => {
        setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME, '');
        setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME, '');
    }, [selectedProduct]);

    useEffect(() => {
        setValue(CONFIRMATION_FORM_INPUT.ORDER_PIN_POINT.NAME, '');
    }, [selectedOrderCollection]);

    useEffect(() => {
        if (!isCompleted) return;
        if (isError) return;

        reset();
    }, [isCompleted, isError]);

    return (
        <form
            className={className}
            onSubmit={handleSubmit(submitHandler)}>
            {/* ORDER DETAILS */}
            <Columns
                className="mb-3"
                gutter={3}>
                <Columns.Column lg={6}>
                    <Input.Label
                        type="text"
                        id={CONFIRMATION_FORM_INPUT.ORDER_NAME.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_NAME.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_NAME.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_NAME.NAME]?.message}
                    />
                </Columns.Column>

                <Columns.Column lg={6}>
                    <Input.Label
                        type="tel"
                        id={CONFIRMATION_FORM_INPUT.ORDER_CONTACT.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_CONTACT.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_CONTACT.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_CONTACT.NAME]?.message}
                    />
                </Columns.Column>

                <Columns.Column lg={6}>
                    <Input.Label
                        type="text"
                        id={CONFIRMATION_FORM_INPUT.ORDER_RECIPIENT_NAME.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_RECIPIENT_NAME.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_RECIPIENT_NAME.NAME,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_RECIPIENT_NAME.NAME]?.message}
                    />
                </Columns.Column>

                <Columns.Column lg={6}>
                    <Input.Label
                        type="tel"
                        id={CONFIRMATION_FORM_INPUT.ORDER_CONTACT_RECIPIENT.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_CONTACT_RECIPIENT.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_CONTACT_RECIPIENT.NAME,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_CONTACT_RECIPIENT.NAME]?.message}
                    />
                </Columns.Column>
            </Columns>

            {/* ORDER PRODUCTS & VARIANTS */}
            {products && products.length > 0 && (
                <Columns
                    className="mb-3"
                    gutter={3}>
                    <Columns.Column lg={selectedProduct ? 8 : 12}>
                        <Input.Label
                            type="select"
                            id={CONFIRMATION_FORM_INPUT.ORDER_SELECTION.NAME}
                            label={CONFIRMATION_FORM_INPUT.ORDER_SELECTION.LABEL}
                            items={products}
                            defaultValue=""
                            hook={{
                                register,
                                name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION.NAME,
                                required: true,
                            }}
                            error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_SELECTION.NAME]?.message}
                        />

                        <Input.Label
                            type="text"
                            id={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_TITLE.NAME}
                            label={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_TITLE.LABEL}
                            value={orderTitle}
                            hook={{
                                register,
                                name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION_TITLE.NAME,
                            }}
                            error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_SELECTION_TITLE.NAME]?.message}
                            disabled
                            hidden
                        />
                    </Columns.Column>

                    {orderSelected?.variants && orderSelected.variants.length > 0 && (
                        <Columns.Column lg={4}>
                            <Input.Label
                                type="select"
                                id={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME}
                                label={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.LABEL}
                                items={orderSelected.variants}
                                hook={{
                                    register,
                                    name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME,
                                    required: true,
                                }}
                                error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME]?.message}
                            />
                        </Columns.Column>
                    )}
                </Columns>
            )}

            {/* ADDONS */}
            {orderSelected?.addons && orderSelected.addons.length > 0 && (
                <Columns className="mb-3">
                    <Columns.Column>
                        <LabelText
                            standalone
                            active
                            htmlFor={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME}>
                            {CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.LABEL}
                        </LabelText>

                        <div className="px-2 flex flex-wrap gap-x-2 gap-y-0.5">
                            {orderSelected.addons.map((item, i) => {
                                return (
                                    <Input
                                        key={i}
                                        type="checkbox"
                                        id={`${selectedProduct}-${item.value}`}
                                        value={item.value}
                                        hook={{
                                            register,
                                            name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME,
                                        }}>
                                        {item.children}
                                    </Input>
                                );
                            })}
                        </div>
                    </Columns.Column>
                </Columns>
            )}

            {/* COLLECTION METHOD, DATE & TIME */}
            <Columns
                className="mb-3"
                gutter={3}>
                <Columns.Column
                    className="order-1"
                    xs={6}>
                    <Input.Label
                        type="select"
                        id={CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.LABEL}
                        items={ORDER_COLLECTIONS_OPTIONS}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME]?.message}
                    />
                </Columns.Column>

                <Columns.Column
                    className="order-3 lg:order-2"
                    xs={3}>
                    <Input.Label
                        type="date"
                        min={getCurrentDate()}
                        id={CONFIRMATION_FORM_INPUT.ORDER_DATE.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_DATE.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_DATE.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_DATE.NAME]?.message}
                    />
                </Columns.Column>

                <Columns.Column
                    className="order-4 lg:order-3"
                    xs={3}>
                    <Input.Label
                        type="time"
                        // step={900}
                        id={CONFIRMATION_FORM_INPUT.ORDER_COLLECTION_TIME.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_COLLECTION_TIME.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_COLLECTION_TIME.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_COLLECTION_TIME.NAME]?.message}
                    />
                </Columns.Column>

                {getValues(CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME) === 'Delivery' && (
                    <Columns.Column className="order-2 lg:order-4">
                        <Input.Label
                            type="text"
                            id={CONFIRMATION_FORM_INPUT.ORDER_PIN_POINT.NAME}
                            label={CONFIRMATION_FORM_INPUT.ORDER_PIN_POINT.LABEL}
                            hook={{
                                register,
                                name: CONFIRMATION_FORM_INPUT.ORDER_PIN_POINT.NAME,
                                required: true,
                            }}
                            error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_PIN_POINT.NAME]?.message}
                        />
                    </Columns.Column>
                )}
            </Columns>

            {/* ORDER NOTES */}
            <div className="mb-3">
                <Input.Label
                    type="textarea"
                    rows={5}
                    id={CONFIRMATION_FORM_INPUT.ORDER_NOTES.NAME}
                    label={CONFIRMATION_FORM_INPUT.ORDER_NOTES.LABEL}
                    hook={{
                        register,
                        name: CONFIRMATION_FORM_INPUT.ORDER_NOTES.NAME,
                    }}
                    error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_NOTES.NAME]?.message}
                />
            </div>

            <Button.Container
                className="mt-5 justify-end"
                items={[
                    {
                        children: (
                            <Button.Arrow
                                as="button"
                                type="submit"
                                size="lg"
                                disabled={isProcessing}>
                                {isProcessing ? 'Processing' : 'Submit'}
                            </Button.Arrow>
                        ),
                    },
                ]}
            />
        </form>
    );
};

export default Confirmation;
