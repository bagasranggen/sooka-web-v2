import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageProps } from '@/libs/@types';
import { getPagesData, getPagesUri, joinArrayString } from '@/libs/utils';
import { createDynamicElement } from '@/libs/factory';

import { PAGES_INDEX_HANDLES } from '@/components/pages/handlesIndex';
import { PAGES_LIMIT_HANDLES } from '@/components/pages/handlesLimit';

export const generateStaticParams = async () => {
    return await getPagesUri({ limit: PAGES_LIMIT_HANDLES });
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata | null> {
    const par = await params;

    let uri = '__home__';
    if (Array.isArray(par.slug) && par.slug.length > 0) uri = joinArrayString(par.slug, '/');

    const { data } = await getPagesData({
        uri,
        uriArr: Array.isArray(par.slug) ? par.slug : [],
    });

    if (!data?.meta?.title) return null;

    return data.meta;
}

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const par = await params;

    let uri = '__home__';
    if (Array.isArray(par.slug) && par.slug.length > 0) uri = joinArrayString(par.slug, '/');

    const { data, entry } = await getPagesData({
        uri,
        uriArr: Array.isArray(par.slug) ? par.slug : [],
        onNotFound: () => {
            notFound();
        },
    });

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
