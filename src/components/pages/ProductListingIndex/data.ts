import { notFound } from 'next/navigation';

import { PageDataParamsProps, PageDataProps } from '@/libs/@types';
import { createProductItem } from '@/libs/factory';

import { apolloClient } from '@/libs/fetcher';
import { CATEGORY_QUERY, PRODUCT_LISTING_QUERY } from '@/graphql';

import { ProductListingIndexProps } from '@/components/pages/ProductListingIndex';

export const ProductListingData = async ({
    type,
    slug,
}: PageDataParamsProps): Promise<PageDataProps<ProductListingIndexProps>> => {
    const { data: categoriesData } = await apolloClient.query({
        query: CATEGORY_QUERY,
        variables: {
            slug,
        },
    });

    const category = categoriesData?.categories?.docs?.[0];

    const { data: productsData } = await apolloClient.query({
        query: PRODUCT_LISTING_QUERY,
        variables: {
            category: category?.id,
        },
    });

    if (!category) return notFound();

    const banner: ProductListingIndexProps['entries']['banner'] = {
        children: category?.title ?? '',
        description: category?.description,
    };

    const products: ProductListingIndexProps['entries']['products'] = [];

    if (productsData?.products?.docs && productsData?.products?.docs?.length > 0) {
        productsData.products.docs.forEach((item: any) => {
            products.push(createProductItem(item));
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
