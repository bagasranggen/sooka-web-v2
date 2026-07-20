'use client';

import React, { Ref } from 'react';

import { useMeasure } from 'react-use';

import Form, { CartProps as FormCartProps } from '@/components/common/Form';
import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import ModalSheet, { ModalSheetProps } from '@/components/common/Modal/ModalSheet';

export type CartProps = {
    price?: React.ReactNode;
} & (Pick<ModalSheetProps, 'open' | 'onOpenChange'> & Pick<FormCartProps, 'items' | 'onSubmit' | 'onRemove'>);

const Cart = ({ open, onOpenChange, items, onSubmit, onRemove, price }: CartProps): React.ReactElement => {
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
            <div
                style={{ '--sticky-height': `${height}px` } as React.CSSProperties}
                className="modal__wrapper container-fluid -mx-1.5 mb-[calc(var(--sticky-height)+3rem)]">
                <Form.Cart
                    items={items}
                    onSubmit={onSubmit}
                    onRemove={onRemove}
                />

                <div
                    ref={ref as Ref<HTMLDivElement>}
                    className="modal__sticky">
                    <div className="container-fluid -mx-1">
                        <Columns
                            className="max-lg:items-center"
                            gutterY={{ xs: 0, md: 3 }}>
                            <Columns.Column xs={8}>
                                <Heading
                                    as="h2"
                                    className="text-[3rem] leading-3.5">
                                    Total
                                </Heading>
                                {price && <p className="text-md uppercase tracking-0.1 font-bold">{price}</p>}
                            </Columns.Column>

                            <Columns.Column
                                xs={4}
                                className="text-end lg:text-center">
                                <Button.Arrow as="button">ORDER</Button.Arrow>
                            </Columns.Column>
                        </Columns>
                    </div>
                </div>
            </div>
        </ModalSheet>
    );
};

export default Cart;
