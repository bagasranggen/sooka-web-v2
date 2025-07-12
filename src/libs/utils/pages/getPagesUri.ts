import { PageUriItemProps } from '@/libs/@types';

import { apolloClient } from '@/libs/fetcher';
import { ENTRY_URI_QUERY } from '@/graphql';

export const getPagesUri = async () => {
    const uri: PageUriItemProps[] = [{ slug: [''] }];

    try {
        const { data } = await apolloClient.query({
            query: ENTRY_URI_QUERY,
            variables: {
                limitPages: 1,
            },
        });

        if (data) {
            Object.values(data).forEach((item: any) => {
                if (item?.docs && item.docs.length > 0) {
                    item.docs.forEach((itm: any) => {
                        const uriArr = itm.uri.split('/');

                        if (uriArr.length > 0) uri.push({ slug: uriArr });
                    });
                }
            });
        }
    } catch {}

    return uri;
};
