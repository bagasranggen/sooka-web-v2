import React from 'react';

import { PageProps } from '@/libs/@types';
import { createDynamicElement } from '@/libs/factory';

import { PAGES_HANDLES } from '@/components/pages/handles';
import { PAGES_DATA_HANDLES } from '@/components/pages/handlesData';
import { PAGES_INDEX_HANDLES } from '@/components/pages/handlesIndex';
import { apolloClient } from '@/libs/fetcher';
import { CATEGORY_QUERY } from '@/graphql';
import ProductListingIndex from '@/components/pages/ProductListingIndex';
import { ProductListingData } from '@/components/pages/ProductListingIndex/data';

// const getData = async ({
//     uri,
// }: {
//     uri: string;
//     searchParams?: PageProps['searchParams'];
// }): Promise<{ type: string; entries: any }> => {
//     const typeHandle = uri.split('/').length > 1 ? PAGES_HANDLES.PRODUCT_DETAIL : PAGES_HANDLES.PRODUCT_LISTING;
//
//     let data = {
//         type: '',
//         // page: {},
//         entries: {},
//     };
//
//     if (PAGES_DATA_HANDLES?.[typeHandle as keyof typeof PAGES_DATA_HANDLES]) {
//         data = await PAGES_DATA_HANDLES[typeHandle as keyof typeof PAGES_DATA_HANDLES]({ type: typeHandle });
//     }
//
//     return data;
// };

export const generateStaticParams = async () => {
    // return [{ products: ['cakes'] }, { products: ['cakes', 'strawberry-shortcake'] }];
    return [{ category: 'cakes' }];
};

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;
    const slug = par.category as string;

    const { entries } = await ProductListingData({ slug });

    return <ProductListingIndex entries={entries} />;
};

export default Page;
