import React from 'react';
import { notFound } from 'next/navigation';

import { PageProps } from '@/libs/@types';
import { getPagesEntry, getPagesUri, joinArrayString } from '@/libs/utils';
import { createDynamicElement } from '@/libs/factory';

import { PAGES_INDEX_HANDLES } from '@/components/pages/handlesIndex';
import { PAGES_DATA_HANDLES } from '@/components/pages/handlesData';
import { PAGES_LIMIT_HANDLES } from '@/components/pages/handlesLimit';

export const generateStaticParams = async () => {
    return await getPagesUri({ limit: PAGES_LIMIT_HANDLES });
};

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;

    let uri = '__home__';
    if (Array.isArray(par.slug) && par.slug.length > 0) uri = joinArrayString(par.slug, '/');

    const entry = await getPagesEntry({
        uri,
        uriArr: Array.isArray(par.slug) ? par.slug : [],
    });

    let dataProcessor = undefined;
    if (entry?.typeHandle) {
        dataProcessor = PAGES_DATA_HANDLES?.[entry.typeHandle as keyof typeof PAGES_DATA_HANDLES];
    }

    let data = undefined;

    if (entry?.typeHandle && dataProcessor) {
        try {
            data = await dataProcessor({
                type: entry.typeHandle,
                uri,
                slug: entry?.slug,
            });
        } catch {}
    }

    if (entry?.typeHandle && entry.typeHandle === 'not-found') {
        notFound();
    }

    return (
        <>
            {createDynamicElement({
                handles: PAGES_INDEX_HANDLES,
                selector: entry?.typeHandle ?? '',
                props: data,
            })}
        </>
    );
};

export default Page;
