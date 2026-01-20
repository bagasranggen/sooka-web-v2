import React from 'react';

import Container from '@/components/common/Container';

import Form from '@/components/common/Form';

export type OrderConfirmationIndexProps = {};

const OrderConfirmationIndex = ({}: OrderConfirmationIndexProps): React.ReactElement => {
    return (
        <Container as="section">
            <Form.Confirmation />
        </Container>
    );
};

export default OrderConfirmationIndex;
