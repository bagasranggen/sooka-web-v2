'use client';

import React, { Ref } from 'react';

import { ParametersProps } from '@/libs/@types';

import { useMeasure } from 'react-use';
import { X } from 'lucide-react';

import Form, { CartOrderProps, CartProps as FormCartProps } from '@/components/common/Form';
import Columns from '@/components/common/Columns';
import Button from '@/components/common/Button';
import ModalSheet, { ModalSheetProps } from '@/components/common/Modal/ModalSheet';

export type CartProps = {
    onSubmit?: (
        data: ParametersProps<NonNullable<CartOrderProps['onSubmit']>>,
        lineItems: FormCartProps['items']
    ) => void;
    onQuantityUpdate?: FormCartProps['onSubmit'];
} & (Pick<ModalSheetProps, 'open' | 'onOpenChange'> &
    Pick<FormCartProps, 'items' | 'onRemove'> &
    Pick<CartOrderProps, 'price' | 'priceCurrency'>);

const Cart = ({
    open,
    onOpenChange,
    items,
    onSubmit,
    onQuantityUpdate,
    onRemove,
    price,
    priceCurrency,
}: CartProps): React.ReactElement => {
    const [ref, { height }] = useMeasure();

    return (
        <ModalSheet
            open={open}
            onOpenChange={onOpenChange}
            className="modal--cart"
            modal={{
                showCloseButton: false,
            }}
            sheet={{
                showCloseButton: false,
                side: 'bottom',
            }}>
            <Button
                as="button"
                type="button"
                className="modal__close"
                onClick={() => {
                    if (onOpenChange) onOpenChange(false);
                }}>
                <X size={16} />
            </Button>

            <Columns>
                <Columns.Column
                    style={{ '--sticky-height': `${height}px` } as React.CSSProperties}
                    sm={6}
                    md={7}
                    lg={12}
                    xl={7}>
                    <div className="modal__orders">
                        <Form.Cart
                            items={items}
                            onSubmit={onQuantityUpdate}
                            onRemove={onRemove}
                        />
                    </div>
                </Columns.Column>

                <Columns.Column
                    sm={6}
                    md={5}
                    lg={12}
                    xl={5}>
                    <div
                        ref={ref as Ref<HTMLDivElement>}
                        className="modal__sticky">
                        <Form.CartOrder
                            price={price}
                            priceCurrency={priceCurrency}
                            onSubmit={(data) => {
                                if (onSubmit) onSubmit(data, items ?? []);
                            }}
                        />
                    </div>
                </Columns.Column>
            </Columns>
        </ModalSheet>
    );
};

export default Cart;
