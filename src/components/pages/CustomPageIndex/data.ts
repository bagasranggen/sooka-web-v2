import { PageDataParamsProps, PageDataProps } from '@/libs/@types';

import { createContentBlocks } from '@/libs/factory';

import { axiosClient } from '@/libs/fetcher';

import { CustomPageIndexProps } from '@/components/pages/CustomPageIndex/index';

export const CustomPageData = async ({ uri }: PageDataParamsProps): Promise<PageDataProps<CustomPageIndexProps>> => {
    const { data } = await axiosClient().get(`/content-blocks?uri=${uri}`);

    const d = data?.entries?.docs?.[0];

    return {
        entries: {
            contentBlocks: createContentBlocks({ items: d?.contentBlocks ?? [] }),
        },
    };
};
