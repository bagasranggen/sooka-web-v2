import React from 'react';
import { Metadata } from 'next';

import { PageProps } from '@/libs/@types';

import { apolloClient } from '@/libs/fetcher';
import { CATEGORY_QUERY } from '@/graphql';

import ProductListingIndex from '@/components/pages/ProductListingIndex';
import { ProductListingData } from '@/components/pages/ProductListingIndex/data';

export const generateStaticParams = async () => {
    const uri: { category: string }[] = [];

    const { data } = await apolloClient.query({
        query: CATEGORY_QUERY,
    });

    const d = data?.categories?.docs;

    if (d && d.length > 0) {
        d.forEach((item: any) => {
            uri.push({ category: item.uri });
        });
    }

    return uri;
};

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
