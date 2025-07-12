import React from 'react';

import { PageProps } from '@/libs/@types';
import { getPagesEntry, joinArrayString } from '@/libs/utils';
import { createDynamicElement } from '@/libs/factory';

import { PAGES_INDEX_HANDLES } from '@/components/pages/handlesIndex';
import { PAGES_DATA_HANDLES } from '@/components/pages/handlesData';

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;

    let uri = '__home__';
    if (Array.isArray(par.slug) && par.slug.length > 0) uri = joinArrayString(par.slug, '/');

    const { typeHandle, slug } = await getPagesEntry({
        uri,
        uriArr: Array.isArray(par.slug) ? par.slug : [],
    });

    let data = undefined;

    if (typeHandle && PAGES_DATA_HANDLES?.[typeHandle]) {
        try {
            data = await PAGES_DATA_HANDLES[typeHandle]({ type: typeHandle, uri, slug });
        } catch {}
    }

    return (
        <>
            {createDynamicElement({
                handles: PAGES_INDEX_HANDLES,
                selector: typeHandle,
                props: data,
            })}
        </>
    );
};

export default Page;
