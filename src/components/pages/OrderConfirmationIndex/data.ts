import { PageDataProps } from '@/libs/@types';
import { axiosClient } from '@/libs/fetcher';
import { convertIntToCurrency } from '@/libs/utils';

import { OrderConfirmationIndexProps } from '@/components/pages/OrderConfirmationIndex';

export const OrderConfirmationData = async (): Promise<PageDataProps<OrderConfirmationIndexProps>> => {
    const { data } = await axiosClient().get(`/products`);

    const products = data?.products?.docs;

    const form: OrderConfirmationIndexProps['entries']['form'] = {
        products: [],
        productsVariant: [],
    };

    if (products && products.length > 0) {
        form.products?.push({ value: '', children: '-- Select Order --', disabled: true });

        products.forEach((item: any) => {
            form.products?.push({
                value: item.title,
                children: item.title,
            });

            let tmpVariant: any = {};

            Object.assign(tmpVariant, { slug: item.title });

            const tmpVariantPrice: any[] = [];
            const tmpVariantVariants: any[] = [];

            if (item?.prices && item.prices?.length > 0) {
                tmpVariantVariants?.push({ value: '', children: '-- Select Order Variant --', disabled: true });

                item.prices.forEach(({ price }: any) => {
                    tmpVariantVariants.push({
                        value: price?.note,
                        children: price?.note,
                    });

                    if (price?.normalPrice) {
                        const orderPrice = price?.salePrice ?? price?.normalPrice ?? 0;

                        tmpVariantPrice.push({
                            value: price?.note,
                            children: convertIntToCurrency(orderPrice, true),
                        });
                    }
                });
            }

            if (tmpVariantVariants.length > 1) Object.assign(tmpVariant, { variants: tmpVariantVariants });

            if (tmpVariantPrice.length > 0) Object.assign(tmpVariant, { prices: tmpVariantPrice });

            if (tmpVariant) form.productsVariant?.push(tmpVariant);
        });
    }

    return {
        entries: {
            form,
        },
    };
};
