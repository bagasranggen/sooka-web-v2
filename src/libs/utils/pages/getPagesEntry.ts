import { apolloClient } from '@/libs/fetcher';
import { ENTRY_CHECK_QUERY } from '@/graphql';

import { PAGES_HANDLES } from '@/components/pages/handles';

export const getPagesEntry = async ({ uri, uriArr }: { uri?: string; uriArr?: string[] }) => {
    let slug = undefined;
    if (uriArr && uriArr.length > 0) slug = uriArr[uriArr.length - 1];

    let typeHandle: undefined | string = uri === '__home__' ? PAGES_HANDLES.HOMEPAGE : undefined;

    try {
        if (!uri) return;
        const { data } = await apolloClient.query({
            query: ENTRY_CHECK_QUERY,
            variables: { uri },
        });

        // console.log({ data });

        if (data) {
            Object.values(data).forEach((item) => {
                if (!typeHandle && item?.docs?.[0]?.typeHandle) typeHandle = item.docs[0].typeHandle;
            });
        }
    } catch {}

    return { typeHandle, slug };
};
