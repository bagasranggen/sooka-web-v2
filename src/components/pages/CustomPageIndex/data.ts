import { PageDataProps } from '@/libs/@types';

import { apolloClient } from '@/libs/fetcher';
import { PAGE_QUERY } from '@/graphql';
import { CustomPageIndexProps } from '@/components/pages/CustomPageIndex/index';
import { createContentBlocks } from '@/libs/factory';

export const CustomPageData = async (): Promise<PageDataProps<CustomPageIndexProps>> => {
    const { data } = await apolloClient.query({
        query: PAGE_QUERY,
    });

    const d = data?.entries?.docs?.[0];

    // console.log({ data: d });

    return {
        entries: {
            contentBlocks: createContentBlocks({ items: d?.contentBlocks ?? [] }),
        },
    };
};
