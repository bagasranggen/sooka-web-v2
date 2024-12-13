import React from 'react';

import { PageProps } from '@/libs/@types';
import { createDynamicElement } from '@/libs/factory';

import { PAGES_HANDLES } from '@/components/pages/handles';
import { PAGES_DATA_HANDLES } from '@/components/pages/handlesData';
import { PAGES_INDEX_HANDLES } from '@/components/pages/handlesIndex';

const getData = async ({
    uri,
}: {
    uri: string;
    searchParams?: PageProps['searchParams'];
}): Promise<{ type: string; entries: any }> => {
    const typeHandle = uri.split('/').length > 1 ? PAGES_HANDLES.PRODUCT_DETAIL : PAGES_HANDLES.PRODUCT_LISTING;

    let data = {
        type: '',
        // page: {},
        entries: {},
    };

    if (PAGES_DATA_HANDLES?.[typeHandle as keyof typeof PAGES_DATA_HANDLES]) {
        data = await PAGES_DATA_HANDLES[typeHandle as keyof typeof PAGES_DATA_HANDLES]({ type: typeHandle });
    }

    return data;
};

export const generateStaticParams = async () => {
    return [{ products: ['cakes'] }, { products: ['cakes', 'strawberry-shortcake'] }];
};

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const product = (await params).products;

    let uri = '';
    if (Array.isArray(product)) uri = product.join('/');

    const { type, entries } = await getData({ uri });

    return <>{createDynamicElement({ handles: PAGES_INDEX_HANDLES, selector: type, props: { entries } })}</>;
};

export default Page;
