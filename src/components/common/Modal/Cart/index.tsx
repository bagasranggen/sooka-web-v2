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
            <Columns gutterY={3}>
                <Columns.Column
                    style={{ '--sticky-height': `${height}px` } as React.CSSProperties}
                    className="max-lg:pb-[calc(var(--sticky-height))]"
                    md={12}
                    lg={8}
                    // xl={10}
                >
                    <Form.Cart
                        items={items}
                        onSubmit={onSubmit}
                        onRemove={onRemove}
                    />
                </Columns.Column>

                <Columns.Column
                    md={12}
                    lg={4}
                    // xl={2}
                >
                    <div
                        ref={ref as Ref<HTMLDivElement>}
                        className="modal__sticky">
                        <Columns
                            className="max-lg:items-center"
                            gutterY={{ xs: 0, md: 3 }}>
                            <Columns.Column
                                xs={8}
                                lg={12}>
                                <Heading
                                    as="h2"
                                    className="text-[3rem] leading-3.5">
                                    Total
                                </Heading>
                                {price && <p className="text-md uppercase tracking-0.1 font-bold">{price}</p>}
                            </Columns.Column>

                            <Columns.Column
                                xs={4}
                                lg={12}
                                className="text-end lg:text-center">
                                <Button.Arrow as="button">ORDER</Button.Arrow>
                            </Columns.Column>
                        </Columns>
                    </div>
                </Columns.Column>
            </Columns>
        </ModalSheet>
    );
};

export default Cart;
