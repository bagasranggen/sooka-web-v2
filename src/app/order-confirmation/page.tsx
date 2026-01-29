import React from 'react';

import OrderConfirmationIndex from '@/components/pages/OrderConfirmationIndex';
import { OrderConfirmationData } from '@/components/pages/OrderConfirmationIndex/data';

export type PageProps = {};

const Page = async ({}: PageProps): Promise<React.ReactElement> => {
    const { entries } = await OrderConfirmationData();

    return <OrderConfirmationIndex entries={entries} />;
};

export default Page;
