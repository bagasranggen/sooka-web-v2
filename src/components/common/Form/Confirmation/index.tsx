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
    orderContact: string;
    orderContactRecipient: string;
    orderSelection: string;
    orderSelectionTitle: string;
    orderSelectionVariant: string;
    orderSelectionPrice: string;
    orderSelectionAddon: [string];
    orderSelectionAddonPrice: [string];
    orderCollection: string;
    orderCollectionTime: string;
    orderPinPoint: string;
};

export type ProductsVariantItemProps = {
    slug: string;
} & Partial<Record<'variants' | 'prices' | 'addons' | 'addonsPrice', BaseInputSelectProps['items']>>;

export type ConfirmationProps = {
    onSubmit?: FormOnSubmitProps<ConfirmationFormFields>;
    products?: BaseInputSelectProps['items'];
    productsVariant?: ProductsVariantItemProps[];
} & ClassnameProps;

const Confirmation = ({ className, products, productsVariant, onSubmit }: ConfirmationProps): React.ReactElement => {
    const {
        register,
        getValues,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
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

    const orderSelected = useMemo(() => {
        let data: undefined | ProductsVariantItemProps = undefined;

        if (selectedProduct && productsVariant && productsVariant.length > 0) {
            const selected = productsVariant.find((item) => item.slug === selectedProduct);

            if (selected) data = selected;
        }

        return data;
    }, [selectedProduct, productsVariant]);

    const orderPrice = useMemo(() => {
        let data: undefined | string = undefined;

        if (orderSelected) {
            const items = orderSelected?.prices;
            const price = items?.find((item) => item.value === selectedProductVariant)?.children as string;

            if (price) data = price;
        }

        setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_PRICE.NAME, data ?? '');

        return data;
    }, [orderSelected, selectedProductVariant]);

    const orderTitle = useMemo(() => {
        let data: undefined | string = undefined;

        if (selectedProduct && !Array.isArray(selectedProduct)) data = selectedProduct;

        if (selectedProductVariant) data += ` (${selectedProductVariant})`;

        if (data) setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_TITLE.NAME, data);

        return data;
    }, [selectedProduct, selectedProductVariant]);

    useEffect(() => {
        setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME, '');
        setValue(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME, '');
    }, [selectedProduct]);

    return (
        <form
            className={className}
            onSubmit={handleSubmit(submitHandler)}>
            <Columns.Row
                className="mb-3"
                spacing={{ x: 3, y: 3 }}>
                <Columns.Column
                    width={{
                        xs: 4,
                        xl: 5,
                    }}>
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

                <Columns.Column
                    className="!basis-auto"
                    width={{ lg: 'auto' }}>
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

                <Columns.Column
                    className="!basis-auto"
                    width={{ lg: 'auto' }}>
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
            </Columns.Row>

            {products && products.length > 0 && (
                <Columns.Row
                    className="mb-3"
                    spacing={{ x: 3, y: 3 }}>
                    <Columns.Column
                        width={{
                            xs: 8,
                            lg: selectedProduct ? 8 : 12,
                        }}>
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
                        <Columns.Column
                            width={{
                                xs: 4,
                                lg: 4,
                            }}>
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

                            <Input.Label
                                type="text"
                                id={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_PRICE.NAME}
                                label={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_PRICE.LABEL}
                                value={orderPrice}
                                hook={{
                                    register,
                                    name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION_PRICE.NAME,
                                }}
                                error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_SELECTION_PRICE.NAME]?.message}
                                disabled
                                hidden
                            />
                        </Columns.Column>
                    )}
                </Columns.Row>
            )}

            {orderSelected?.addons && orderSelected.addons.length > 0 && (
                <Columns.Row className="mb-3">
                    <Columns.Column>
                        <LabelText
                            standalone
                            active
                            htmlFor={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME}>
                            {CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.LABEL}
                        </LabelText>

                        <div className="px-2 flex flex-wrap gap-x-2 gap-y-0.5">
                            {getValues(CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME)}

                            {orderSelected.addons.map((item, i) => {
                                const addonPrice = orderSelected?.addonsPrice?.[i];

                                console.log({ addonPrice });

                                return (
                                    <div key={i}>
                                        <Input
                                            type="checkbox"
                                            id={`${selectedProduct}-${item.value}`}
                                            value={item.value}
                                            onClick={() => {
                                                console.log('click');
                                            }}
                                            hook={{
                                                register,
                                                name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME,
                                            }}>
                                            {item.children}
                                        </Input>

                                        {/*{addonPrice && (*/}
                                        {/*    <Input*/}
                                        {/*        type="checkbox"*/}
                                        {/*        id={`${selectedProduct}-price-${addonPrice.value}`}*/}
                                        {/*        value={addonPrice.value}*/}
                                        {/*        checked={getValues(*/}
                                        {/*            CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON.NAME*/}
                                        {/*        ).includes(item.value)}*/}
                                        {/*        hook={{*/}
                                        {/*            register,*/}
                                        {/*            name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON_PRICE.NAME,*/}
                                        {/*        }}>*/}
                                        {/*        {addonPrice.children}*/}
                                        {/*    </Input>*/}
                                        {/*)}*/}
                                    </div>
                                );
                            })}
                        </div>

                        {/*{orderSelected?.addonsPrice && orderSelected.addonsPrice.length > 0 && (*/}
                        {/*    <div className="px-2 flex flex-wrap gap-x-2 gap-y-0.5">*/}
                        {/*        {orderSelected.addonsPrice.map((item, i) => {*/}
                        {/*            return (*/}
                        {/*                <div key={i}>*/}
                        {/*                    <Input*/}
                        {/*                        type="checkbox"*/}
                        {/*                        id={`${selectedProduct}-price-${item.value}`}*/}
                        {/*                        value={item.value}*/}
                        {/*                        // checked={getValues()}*/}
                        {/*                        hook={{*/}
                        {/*                            register,*/}
                        {/*                            name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION_ADDON_PRICE.NAME,*/}
                        {/*                        }}>*/}
                        {/*                        {item.children}*/}
                        {/*                    </Input>*/}
                        {/*                </div>*/}
                        {/*            );*/}
                        {/*        })}*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </Columns.Column>
                </Columns.Row>
            )}

            <Columns.Row
                className="mb-3"
                spacing={{ x: 3, y: 3 }}>
                <Columns.Column
                    width={{
                        xs: 6,
                        lg: 6,
                    }}>
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
                    width={{
                        xs: 3,
                        lg: 3,
                    }}>
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
                    width={{
                        xs: 3,
                        lg: 3,
                    }}>
                    <Input.Label
                        type="time"
                        step={900}
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
            </Columns.Row>

            {getValues(CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME) === 'delivery' && (
                <Columns.Row className="mb-3">
                    <Columns.Column>
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
                </Columns.Row>
            )}

            <Button.Container
                className="mt-5 justify-end"
                items={[
                    {
                        children: (
                            <Button.Arrow
                                as="button"
                                type="submit"
                                size="lg">
                                Submit
                            </Button.Arrow>
                        ),
                    },
                ]}
            />
        </form>
    );
};

export default Confirmation;
