import React from 'react';

import { PageProps } from '@/libs/@types';

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

// export const generateStaticParams = async () => {
//     // return [{ products: ['cakes'] }, { products: ['cakes', 'strawberry-shortcake'] }];
//     return [{ category: 'cakes' }];
// };

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;
    const slug = par.category as string;

    const { entries } = await ProductListingData({ slug });

    return <ProductListingIndex entries={entries} />;
};

export default Page;
