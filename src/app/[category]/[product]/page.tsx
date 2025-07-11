import React from 'react';
import { Metadata } from 'next';

import { PageProps } from '@/libs/@types';

import { apolloClient } from '@/libs/fetcher';
import { PRODUCT_URI_QUERY } from '@/graphql';

import ProductDetailIndex from '@/components/pages/ProductDetailIndex';
import { ProductDetailData } from '@/components/pages/ProductDetailIndex/data';

export const generateStaticParams = async () => {
    const uri: { category: string; product: string }[] = [];

    const { data } = await apolloClient.query({
        query: PRODUCT_URI_QUERY,
    });

    const d = data?.products?.docs;

    if (d && d.length > 0) {
        d.forEach((item: any) => {
            const [category, product] = item?.uri?.split('/');

            uri.push({ category, product });
        });
    }

    return uri;
};

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
