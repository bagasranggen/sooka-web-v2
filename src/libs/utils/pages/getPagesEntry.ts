import { apolloClient } from '@/libs/fetcher';
import { ENTRY_CHECK_QUERY } from '@/graphql';

import { PAGES_HANDLES } from '@/components/pages/handles';

export type GetPagesEntryTypes = {
    uri?: string;
    uriArr?: string[];
};

export const getPagesEntry = async ({ uri, uriArr }: GetPagesEntryTypes) => {
    let slug = undefined;
    if (uriArr && uriArr.length > 0) slug = uriArr[uriArr.length - 1];

    let typeHandle: string | undefined = undefined;
    if (uri === '__home__') typeHandle = PAGES_HANDLES.HOMEPAGE;

    try {
        if (!uri) return;

        const { data } = await apolloClient.query({
            query: ENTRY_CHECK_QUERY,
            variables: { uri },
        });

        if (data) {
            Object.values(data).forEach((item: any) => {
                if (!typeHandle && item?.docs?.[0]?.typeHandle) typeHandle = item.docs[0].typeHandle;
            });
        }

        if (!typeHandle) typeHandle = 'not-found';
    } catch {}

    return { typeHandle, slug };
};
