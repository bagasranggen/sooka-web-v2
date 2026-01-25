'use client';

import React, { useState } from 'react';

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
    const [formIsProcessing, setFormIsProcessing] = useState<boolean>(false);
    const [formIsCompleted, setFormIsCompleted] = useState<boolean>(false);
    const [formIsError, setFormIsError] = useState<boolean>(false);

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
                isProcessing={formIsProcessing}
                isCompleted={formIsCompleted}
                isError={formIsError}
                onSubmit={async (data) => {
                    setFormIsProcessing(true);

                    await submitOrderForm(data)
                        .then((res) => {
                            if (res?.status === 'success') setFormIsCompleted(true);
                            if (res?.status === 'error') setFormIsError(true);
                        })
                        .finally(() => {
                            setFormIsProcessing(false);
                        });
                }}
            />
        </Container>
    );
};

export default OrderConfirmationIndex;
