import { notFound } from 'next/navigation';

import { PageDataParamsProps, PageDataProps } from '@/libs/@types';
import { createProductItem } from '@/libs/factory';

import { axiosClient } from '@/libs/fetcher';

import { ProductListingIndexProps } from '@/components/pages/ProductListingIndex';

export const ProductListingData = async ({
    type,
    slug,
}: PageDataParamsProps): Promise<PageDataProps<ProductListingIndexProps>> => {
    const { data: categoriesData } = await axiosClient().get(`/categories?slug=${slug}`);

    const category = categoriesData?.categories?.docs?.[0];

    const { data: productsData } = await axiosClient().get(`/products?category=${category?.id}`);

    if (!category) return notFound();

    const banner: ProductListingIndexProps['entries']['banner'] = {
        children: category?.title ?? '',
        description: category?.description,
    };

    const products: ProductListingIndexProps['entries']['products'] = [];

    if (productsData?.products?.docs && productsData?.products?.docs?.length > 0) {
        productsData.products.docs.forEach((item: any) => {
            products.push(createProductItem({ item, hasBadge: true }));
        });
    }

    return {
        type,
        meta: category?.meta,
        entries: {
            banner,
            products,
        },
    };
};
