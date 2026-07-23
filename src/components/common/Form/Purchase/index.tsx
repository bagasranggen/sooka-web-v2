'use client';

import React, { useEffect, useMemo } from 'react';

import { ClassnameProps } from '@/libs/@types';
import { checkStringIsNumber, convertIntToCurrency } from '@/libs/utils';

import { useForm } from 'react-hook-form';

import Columns from '@/components/common/Columns';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import PurchaseSection, { PurchaseSectionProps } from '@/components/common/Form/Purchase/PurchaseSection';

export const PURCHASE_FORM_HANDLE = {
    TITLE: 'title',
    VARIANT: 'variant',
    ADDONS: 'addOns',
    NOTE: 'note',
    TOTAL_PRICE: 'totalPrice',
    CART_ITEM_ID: 'cartItemId',
    QUANTITY: 'qty',
} as const;

export type PurchaseFormFields = {
    [PURCHASE_FORM_HANDLE.TITLE]: string;
    [PURCHASE_FORM_HANDLE.VARIANT]: string;
    [PURCHASE_FORM_HANDLE.ADDONS]: string[];
    [PURCHASE_FORM_HANDLE.NOTE]: string;
    [PURCHASE_FORM_HANDLE.TOTAL_PRICE]?: number;
    [PURCHASE_FORM_HANDLE.CART_ITEM_ID]: string;
    [PURCHASE_FORM_HANDLE.QUANTITY]: number;
} & Record<string, string | string[] | number>;

export type PurchaseProps = {
    title?: string;
    variants?: PurchaseSectionProps['items'];
    addOns?: PurchaseSectionProps['items'];
    onSubmit?: (data: PurchaseFormFields) => void;
} & ClassnameProps;

const Purchase = ({ className, title, variants, addOns, onSubmit }: PurchaseProps): React.ReactElement => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
        watch,
    } = useForm<PurchaseFormFields>({
        defaultValues: {
            title,
            qty: 1,
            cartItemId: new Date().getTime().toString(),
        },
    });

    watch(PURCHASE_FORM_HANDLE.VARIANT);
    watch(PURCHASE_FORM_HANDLE.ADDONS);

    const variantPrice = getValues(PURCHASE_FORM_HANDLE.VARIANT);
    const addonsPrice = getValues(PURCHASE_FORM_HANDLE.ADDONS);

    const total = useMemo(() => {
        let data = 0;

        if (variantPrice && typeof variantPrice === 'string') {
            const [label, price] = variantPrice.split(',');
            if (checkStringIsNumber(price)) data += parseInt(price);
        }

        if (addonsPrice && Array.isArray(addonsPrice) && addonsPrice.length > 0) {
            addonsPrice.forEach((item) => {
                if (item && typeof item === 'string') {
                    const [slug, label, price] = item.split(',');
                    if (checkStringIsNumber(price)) data += parseInt(price);
                }
            });
        }

        return data;
    }, [variantPrice, addonsPrice]);

    useEffect(() => {
        setValue(PURCHASE_FORM_HANDLE.TOTAL_PRICE, total);
    }, [total]);

    return (
        <form
            className={className}
            onSubmit={handleSubmit((data) => {
                if (onSubmit) onSubmit(data);
            })}>
            {variants && variants.length > 0 && (
                <>
                    <PurchaseSection
                        label="Available in"
                        register={register}
                        name={PURCHASE_FORM_HANDLE.VARIANT}
                        error={errors?.variant?.message}
                        items={variants}
                    />
                </>
            )}

            {addOns && addOns.length > 0 && (
                <PurchaseSection
                    className={variants && variants.length > 0 ? 'mt-3' : ''}
                    label="Add on(s)"
                    register={register}
                    getValues={getValues}
                    name={PURCHASE_FORM_HANDLE.ADDONS}
                    error={errors?.addOns?.message}
                    items={addOns}
                />
            )}

            <PurchaseSection
                className="mt-3"
                label="Note"
                error={errors?.addOns?.message}>
                <Input
                    type="textarea"
                    id="test"
                    placeholder="Place your note here..."
                    className="w-full focus-visible:outline-0 mt-0.5"
                    hook={{
                        register,
                        name: PURCHASE_FORM_HANDLE.NOTE,
                    }}
                />
            </PurchaseSection>

            <div className="mt-3">
                <Columns className="items-center">
                    <Columns.Column>
                        <p className="font-bold uppercase tracking-0.1 text-md mb-0">
                            {convertIntToCurrency(total, true)}
                        </p>
                        <Input
                            type="text"
                            disabled
                            hidden
                            value={total}
                            hook={{
                                register,
                                name: PURCHASE_FORM_HANDLE.TOTAL_PRICE,
                                valueAsNumber: true,
                            }}
                        />
                    </Columns.Column>

                    <Columns.Column xs="auto">
                        <Button.Arrow
                            as="button"
                            type="submit">
                            ORDER
                        </Button.Arrow>
                    </Columns.Column>
                </Columns>
            </div>
        </form>
    );
};

export default Purchase;
