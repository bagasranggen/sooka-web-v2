import { PageDataParamsProps, PageDataProps } from '@/libs/@types';
import { createProductItem } from '@/libs/factory';

import { apolloClient } from '@/libs/fetcher';
import { PRODUCT_LISTING_INDEX_QUERY, PRODUCT_LISTING_QUERY } from '@/graphql';

import { ProductListingIndexProps } from '@/components/pages/ProductListingIndex';

export const ProductListingData = async ({
    uri,
    type,
}: PageDataParamsProps): Promise<PageDataProps<ProductListingIndexProps>> => {
    const { data: categoriesData } = await apolloClient.query({
        query: PRODUCT_LISTING_INDEX_QUERY,
        variables: { uri },
    });

    const category = categoriesData?.entries?.docs?.[0];

    const { data: productsData } = await apolloClient.query({
        query: PRODUCT_LISTING_QUERY,
        variables: { category: category?.category?.id },
    });

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
