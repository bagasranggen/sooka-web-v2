import { PageDataParamsProps, PageDataProps } from '@/libs/@types';

import { createContentBlocks } from '@/libs/factory';

import { apolloClient } from '@/libs/fetcher';

import { StaticPageIndexProps } from './index';
import { PAGE_QUERY } from '@/graphql';

export const StaticPageData = async ({ uri }: PageDataParamsProps): Promise<PageDataProps<StaticPageIndexProps>> => {
    const { data } = await apolloClient.query({
        query: PAGE_QUERY,
        variables: { uri },
    });

    const d = data?.entries?.docs?.[0];

    return {
        entries: {
            contentBlocks: createContentBlocks({ items: d?.contentBlocks?.blocks ?? [] }),
        },
    };
};
