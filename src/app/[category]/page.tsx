import React from 'react';

import { PageProps } from '@/libs/@types';

import ProductListingIndex from '@/components/pages/ProductListingIndex';
import { ProductListingData } from '@/components/pages/ProductListingIndex/data';

// export const generateStaticParams = async () => {
//     return [{ category: 'cakes' }];
// };

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;
    const slug = par.category as string;

    const { entries } = await ProductListingData({ slug });

    return <ProductListingIndex entries={entries} />;
};

export default Page;
