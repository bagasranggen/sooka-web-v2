import React from 'react';

import { PageProps } from '@/libs/@types';

import ProductDetailIndex from '@/components/pages/ProductDetailIndex';
import { ProductDetailData } from '@/components/pages/ProductDetailIndex/data';

// export const generateStaticParams = async () => {
//     return [{ category: 'cakes', product: 'strawberry-fields' }];
// };

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;
    const slug = par.product as string;

    const { entries } = await ProductDetailData({ slug });

    return <ProductDetailIndex entries={entries} />;
};

export default Page;
