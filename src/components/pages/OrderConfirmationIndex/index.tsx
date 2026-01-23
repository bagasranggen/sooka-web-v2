'use client';

import React from 'react';

import { submitOrderForm } from '@/libs/actions';

import Container from '@/components/common/Container';
import Form, { ConfirmationProps } from '@/components/common/Form';
import Heading from '@/components/common/Heading';

export type OrderConfirmationIndexProps = {
    entries: {
        form: Pick<ConfirmationProps, 'products' | 'productsVariant'>;
    };
};

const OrderConfirmationIndex = ({ entries }: OrderConfirmationIndexProps): React.ReactElement => {
    return (
        <Container as="section">
            <Heading
                as="h1"
                size="section"
                className="mt-10 text-center">
                Order Confirmation
            </Heading>

            <Form.Confirmation
                className="mt-4 md:mt-7 mb-10"
                products={entries.form.products}
                productsVariant={entries.form.productsVariant}
                onSubmit={async (data) => {
                    const res = await submitOrderForm(data);

                    console.log({ res });
                }}
            />
        </Container>
    );
};

export default OrderConfirmationIndex;
