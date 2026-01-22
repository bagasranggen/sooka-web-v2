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
                value: item.title,
                children: item.title,
            });

            let tmpVariant: any = {};

            Object.assign(tmpVariant, { slug: item.title });

            const tmpVariantPrices: any[] = [];
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

                        tmpVariantPrices.push({
                            value: price?.note,
                            children: orderPrice,
                        });
                    }
                });
            }

            if (tmpVariantVariants.length > 1) Object.assign(tmpVariant, { variants: tmpVariantVariants });

            if (tmpVariantPrices.length > 0) Object.assign(tmpVariant, { prices: tmpVariantPrices });

            const tmpAddons: any[] = [];
            const tmpAddonsPrices: any[] = [];

            if (item?.addons && item.addons.length > 0) {
                item.addons.forEach((addon: any) => {
                    const price = addon?.prices?.[0]?.price;
                    const addonIsFree = price?.isFree;

                    let addonPrice = 0;
                    if (!addonIsFree && price?.normalPrice) addonPrice = price.normalPrice;
                    if (!addonIsFree && price?.salePrice) addonPrice = price.salePrice;

                    tmpAddons.push({
                        value: addon?.title,
                        children: addon?.title,
                    });

                    tmpAddonsPrices.push({
                        value: addonPrice,
                        children: addonPrice,
                    });
                });
            }

            if (tmpAddons.length > 0) Object.assign(tmpVariant, { addons: tmpAddons });

            if (tmpAddonsPrices.length > 0) Object.assign(tmpVariant, { addonsPrice: tmpAddonsPrices });

            if (tmpVariant) form.productsVariant?.push(tmpVariant);
        });
    }

    return {
        entries: {
            form,
        },
    };
};
