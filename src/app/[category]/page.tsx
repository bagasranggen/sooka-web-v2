import React from 'react';
import { Metadata } from 'next';

import { PageProps } from '@/libs/@types';

import ProductListingIndex from '@/components/pages/ProductListingIndex';
import { ProductListingData } from '@/components/pages/ProductListingIndex/data';

// export const generateStaticParams = async () => {
//     return [{ category: 'cakes' }];
// };

export async function generateMetadata({ params }: PageProps): Promise<Metadata | null> {
    const par = await params;
    const slug = par.category as string;

    const { meta } = await ProductListingData({ slug });

    if (!meta?.title) return null;

    return meta;
}

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;
    const slug = par.category as string;

    const { entries } = await ProductListingData({ slug });

    return <ProductListingIndex entries={entries} />;
};

export default Page;
