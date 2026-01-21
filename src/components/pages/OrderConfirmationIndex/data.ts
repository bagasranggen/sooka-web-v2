import { PageDataProps } from '@/libs/@types';

import { OrderConfirmationIndexProps } from '@/components/pages/OrderConfirmationIndex';

export const OrderConfirmationData = async (): Promise<PageDataProps<OrderConfirmationIndexProps>> => {
    const form: OrderConfirmationIndexProps['entries']['form'] = {
        products: [],
        productsVariant: [],
    };

    form.products?.push({ value: '', children: '-- Select Order --' });

    form.productsVariant?.push({ value: '', children: '-- Select Order Variant --' });

    return {
        entries: {
            form,
        },
    };
};
