import React from 'react';

import { PageProps } from '@/libs/@types';

import ProductListingIndex from '@/components/pages/ProductListingIndex';
import { ProductListingData } from '@/components/pages/ProductListingIndex/data';
import { Metadata, ResolvingMetadata } from 'next';

// export const generateStaticParams = async () => {
//     return [{ category: 'cakes' }];
// };

export async function generateMetadata({ params }: PageProps): Promise<Metadata | undefined> {
    const par = await params;
    const slug = par.category as string;

    const { meta } = await ProductListingData({ slug });

    // fetch post information
    // const post = await fetch(`https://api.vercel.app/blog/${slug}`).then((res) =>
    //     res.json()
    // )

    return meta;

    // return {
    //     title: 'post.title',
    //     // description: post.description,
    // };
}

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;
    const slug = par.category as string;

    const { entries } = await ProductListingData({ slug });

    return <ProductListingIndex entries={entries} />;
};

export default Page;
