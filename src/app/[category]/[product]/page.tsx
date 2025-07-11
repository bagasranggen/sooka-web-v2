import React from 'react';
import { Metadata } from 'next';

import { PageProps } from '@/libs/@types';

import ProductDetailIndex from '@/components/pages/ProductDetailIndex';
import { ProductDetailData } from '@/components/pages/ProductDetailIndex/data';

// export const generateStaticParams = async () => {
//     return [{ category: 'cakes', product: 'strawberry-fields' }];
// };

export async function generateMetadata({ params }: PageProps): Promise<Metadata | undefined | null> {
    const par = await params;
    const slug = par.product as string;

    const { meta } = await ProductDetailData({ slug });

    if (!meta?.title) return null;

    return meta;
}

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;
    const slug = par.product as string;

    const { entries } = await ProductDetailData({ slug });

    return <ProductDetailIndex entries={entries} />;
};

export default Page;
