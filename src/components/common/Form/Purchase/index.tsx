import React, { useEffect, useMemo } from 'react';

import { checkStringIsNumber, convertIntToCurrency } from '@/libs/utils';

import { useForm } from 'react-hook-form';

import Columns from '@/components/common/Columns';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import PurchaseSection, { PurchaseSectionProps } from '@/components/common/Form/Purchase/PurchaseSection';
import { ClassnameProps } from '@/libs/@types';

export const PURCHASE_FORM_HANDLE = {
    VARIANT: 'variant',
    ADDONS: 'addOns',
    NOTE: 'note',
    TOTAL_PRICE: 'totalPrice',
};

export type PurchaseFormFields = {
    [PURCHASE_FORM_HANDLE.VARIANT]?: string;
    [PURCHASE_FORM_HANDLE.ADDONS]?: string[];
    [PURCHASE_FORM_HANDLE.NOTE]?: string;
    [PURCHASE_FORM_HANDLE.TOTAL_PRICE]?: string;
};

export type PurchaseProps = {
    variants?: PurchaseSectionProps['items'];
    addOns?: PurchaseSectionProps['items'];
    onSubmit?: (data: PurchaseFormFields) => void;
} & ClassnameProps;

const Purchase = ({ className, variants, addOns, onSubmit }: PurchaseProps): React.ReactElement => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
        watch,
    } = useForm<PurchaseFormFields>();

    watch(PURCHASE_FORM_HANDLE.VARIANT);
    watch(PURCHASE_FORM_HANDLE.ADDONS);

    const variantPrice = getValues(PURCHASE_FORM_HANDLE.VARIANT);
    const addonsPrice = getValues(PURCHASE_FORM_HANDLE.ADDONS);

    const total = useMemo(() => {
        let data = 0;

        if (variantPrice && typeof variantPrice === 'string' && checkStringIsNumber(variantPrice)) {
            data += parseInt(variantPrice);
        }

        if (addonsPrice && addonsPrice.length > 0 && Array.isArray(addonsPrice)) {
            addonsPrice.forEach((item) => {
                if (item && typeof item === 'string' && checkStringIsNumber(item)) {
                    data += parseInt(item);
                }
            });
        }

        return data;
    }, [variantPrice, addonsPrice]);

    useEffect(() => {
        setValue(PURCHASE_FORM_HANDLE.TOTAL_PRICE, total.toString());
    }, [total]);

    return (
        <form
            className={className}
            onSubmit={handleSubmit((data) => {
                if (onSubmit) onSubmit(data);
            })}>
            {variants && variants.length > 0 && (
                <PurchaseSection
                    label="Available in"
                    register={register}
                    name={PURCHASE_FORM_HANDLE.VARIANT}
                    error={errors?.variant?.message}
                    items={variants}
                />
            )}

            {addOns && addOns.length > 0 && (
                <PurchaseSection
                    className={variants && variants.length > 0 ? 'mt-3' : ''}
                    label="Add on(s)"
                    register={register}
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
                <Columns>
                    <Columns.Column>
                        <p>RP{total > 0 ? convertIntToCurrency(total) : 0}</p>
                        <Input
                            type="text"
                            disabled
                            hidden
                            value={total}
                            hook={{
                                register,
                                name: PURCHASE_FORM_HANDLE.TOTAL_PRICE,
                            }}
                        />
                    </Columns.Column>

                    <Columns.Column md="auto">
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
