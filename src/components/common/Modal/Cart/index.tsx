'use client';

import React, { Ref } from 'react';

import { ParametersProps } from '@/libs/@types';

import { useMeasure } from 'react-use';

import Form, { CartOrderProps, CartProps as FormCartProps } from '@/components/common/Form';
import ModalSheet, { ModalSheetProps } from '@/components/common/Modal/ModalSheet';
import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';

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
            <Columns
                // gutterX={{ xs: 0, lg: 3 }}
            >
                <Columns.Column lg={7}>
                    <div className="modal__orders max-lg:container-fluid">
                        <Form.Cart
                            items={items}
                            onSubmit={onQuantityUpdate}
                            onRemove={onRemove}
                            className="last-of-type:mb-[calc(var(--sticky-height)+3rem)]"
                        />
                    </div>
                </Columns.Column>

                <Columns.Column lg={5}>
                    <div
                        ref={ref as Ref<HTMLDivElement>}
                        className="modal__sticky">
                        <Heading
                            as="h2"
                            className="text-[3.5rem] leading-4 mb-1.5">
                            Order Details
                        </Heading>

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

            {/*<div*/}
            {/*    style={{ '--sticky-height': `${height}px` } as React.CSSProperties}*/}
            {/*    className="modal__wrapper container-fluid -mx-1.5">*/}
            {/*    <Form.Cart*/}
            {/*        items={items}*/}
            {/*        onSubmit={onQuantityUpdate}*/}
            {/*        onRemove={onRemove}*/}
            {/*        className="last-of-type:mb-[calc(var(--sticky-height)+3rem)]"*/}
            {/*    />*/}
            {/*</div>*/}

            {/*<div*/}
            {/*    ref={ref as Ref<HTMLDivElement>}*/}
            {/*    className="modal__sticky container-fluid">*/}
            {/*    <Form.CartOrder*/}
            {/*        price={price}*/}
            {/*        priceCurrency={priceCurrency}*/}
            {/*        onSubmit={(data) => {*/}
            {/*            if (onSubmit) onSubmit(data, items ?? []);*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</div>*/}
        </ModalSheet>
    );
};

export default Cart;
