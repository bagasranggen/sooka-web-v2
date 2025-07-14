import { PageDataParamsProps, PageDataProps } from '@/libs/@types';

import { createContentBlocks } from '@/libs/factory';

import { apolloClient } from '@/libs/fetcher';
import { PAGE_QUERY } from '@/graphql';

import { CustomPageIndexProps } from '@/components/pages/CustomPageIndex/index';

export const CustomPageData = async ({ uri }: PageDataParamsProps): Promise<PageDataProps<CustomPageIndexProps>> => {
    const { data } = await apolloClient.query({
        query: PAGE_QUERY,
        variables: { uri },
    });

    const d = data?.entries?.docs?.[0];

    return {
        entries: {
            contentBlocks: createContentBlocks({ items: d?.contentBlocks ?? [] }),
        },
    };
};
