import { PageDataProps } from '@/libs/@types';
import { axiosClient } from '@/libs/fetcher';

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
                value: item.slug,
                children: item.title,
            });

            let tmpVariant: any = {};

            Object.assign(tmpVariant, { slug: item.slug });

            const tmpVariantPrice: any[] = [];

            if (item?.prices && item.prices?.length > 0) {
                tmpVariantPrice?.push({ value: '', children: '-- Select Order Variant --', disabled: true });

                item.prices.forEach(({ price }: any) => {
                    if (price?.normalPrice) {
                        tmpVariantPrice.push({
                            value: price?.salePrice ?? price?.normalPrice,
                            children: price?.note,
                        });
                    }
                });
            }

            if (tmpVariantPrice.length > 1) Object.assign(tmpVariant, { items: tmpVariantPrice });

            if (tmpVariant) form.productsVariant?.push(tmpVariant);
        });
    }

    return {
        entries: {
            form,
        },
    };
};
