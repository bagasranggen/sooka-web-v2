'use client';

import React, { Ref } from 'react';

import { useMeasure } from 'react-use';

import Form, { CartProps as FormCartProps } from '@/components/common/Form';
import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import ModalSheet, { ModalSheetProps } from '@/components/common/Modal/ModalSheet';
import Input from '@/components/common/Input';

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
                className="modal__wrapper container-fluid -mx-1.5">
                <Form.Cart
                    items={items}
                    onSubmit={onSubmit}
                    onRemove={onRemove}
                    className="last-of-type:mb-[calc(var(--sticky-height)+3rem)]"
                />
            </div>

            <div
                ref={ref as Ref<HTMLDivElement>}
                className="modal__sticky container-fluid">
                <Columns
                    // className="max-lg:items-center"
                    className="items-end"
                    gutterY={{ xs: 0, md: 3 }}>
                    <Columns.Column>
                        <Columns>
                            <Columns.Column>
                                <Input.Label
                                    type={'text'}
                                    id={'test'}
                                    label="Promo Code"
                                />
                            </Columns.Column>
                            <Columns.Column>
                                <Input.Label
                                    type={'text'}
                                    id={'test'}
                                    label="Promo Code"
                                />
                            </Columns.Column>
                        </Columns>

                        <div className="mt-2">
                            <Heading
                                as="h2"
                                className="text-[3rem] leading-3.5">
                                Total
                            </Heading>
                            {price && <p className="text-md uppercase tracking-0.1 font-bold">{price}</p>}
                        </div>
                    </Columns.Column>

                    <Columns.Column
                        xs={3}
                        md={'auto'}
                        className="text-end">
                        <Button.Arrow
                            as="button"
                            size="lg">
                            ORDER
                        </Button.Arrow>
                    </Columns.Column>
                </Columns>
            </div>
        </ModalSheet>
    );
};

export default Cart;
