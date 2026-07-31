import { PageDataParamsProps, PageDataProps } from '@/libs/@types';
import { createBackgroundImage, createProductItem } from '@/libs/factory';
import { checkMediaStatus } from '@/libs/utils';

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

    const { data: bannerBg } = checkMediaStatus({
        item: category?.headerBackground as any,
        handles: ['bannerDesktop', 'bannerTablet', 'bannerMobile'],
        volumeAssets: 'mediaProducts',
    });

    const banner: ProductListingIndexProps['entries']['banner'] = {
        media: [],
        children: category?.title ?? '',
        description: category?.description,
    };

    if (bannerBg?.bannerDesktop && bannerBg?.bannerMobile && banner?.media) {
        const bannerDesktop = createBackgroundImage({ item: bannerBg.bannerDesktop });
        const bannerMobile = createBackgroundImage({ item: bannerBg.bannerMobile });
        if (bannerDesktop && bannerMobile) banner.media = [bannerDesktop, bannerMobile];
    }

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
