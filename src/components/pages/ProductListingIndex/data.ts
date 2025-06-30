import { CARD_THUMBNAIL_WITH_PRICE, PRODUCT_LISTING_BANNER } from '@/libs/mock';
import { PageDataParamsProps, PageDataProps } from '@/libs/@types';

import { ProductListingIndexProps } from '@/components/pages/ProductListingIndex';
import { apolloClient } from '@/libs/fetcher';
import { CATEGORY_QUERY, PRODUCT_LISTING_QUERY } from '@/graphql';
import { notFound } from 'next/navigation';
import { createPicsumImage, createPictureImage, createProductItem } from '@/libs/factory';

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

    // const products = productsData?.products?.docs;

    if (!category) return notFound();

    const banner: ProductListingIndexProps['entries']['banner'] = {
        children: category?.title ?? '',
        description: category?.description,
    };

    const products: ProductListingIndexProps['entries']['products'] = [];

    if (productsData?.products?.docs && productsData?.products?.docs?.length > 0) {
        productsData.products.docs.forEach((item) => {
            console.log({ item });

            products.push(createProductItem(item));

            // products.push({
            //     cta: {
            //         href: '/cakes/strawberry-shortcake',
            //     },
            //     media: [
            //         createPictureImage({ item: createPicsumImage({ id: 237, width: 400, height: 619 }), media: 768 }),
            //         createPictureImage({ item: createPicsumImage({ id: 237, width: 400, height: 400 }) }),
            //     ],
            //     mediaHover: [
            //         createPictureImage({ item: createPicsumImage({ id: 22, width: 400, height: 619 }), media: 768 }),
            //         createPictureImage({ item: createPicsumImage({ id: 22, width: 400, height: 400 }) }),
            //     ],
            //     title: item?.title ?? '',
            //     price: item === 0 ? '500.000' : '230.000',
            //     ...(item === 0 ? { salePrice: '230.000' } : {}),
            // });
        });
    }

    console.log({ category, products });

    return {
        type,
        entries: {
            banner,
            // products: [...CARD_THUMBNAIL_WITH_PRICE, CARD_THUMBNAIL_WITH_PRICE[0], CARD_THUMBNAIL_WITH_PRICE[0]],
            products,
        },
    };
};
