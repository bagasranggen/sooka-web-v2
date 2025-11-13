import { PageUriItemProps } from '@/libs/@types';

import { PAGES_LIMIT_DEFAULT, PAGES_LIMIT_HANDLES } from '@/components/pages/handlesLimit';

import { apolloClient, axiosClient } from '@/libs/fetcher';
import { ENTRY_URI_QUERY } from '@/graphql';

export const getPagesUri = async (props?: { limit?: any }) => {
    const uri: PageUriItemProps[] = [{ slug: [''] }];

    try {
        const { data: pagesData } = await axiosClient().get(`/pages`);

        // console.log({
        //     limit: props?.limit,
        //     PAGES_LIMIT_HANDLES,
        //     // pagesData: pagesData?.pages?.docs,
        // });

        // let pages: Record<string, { slug: string[] }[]> | undefined = undefined;

        if (pagesData?.pages?.docs && pagesData.pages.docs.length > 0) {
            pagesData.pages.docs.forEach((item: any, i: number) => {
                const handle = item.typeHandle;
                const limit = props?.limit?.[handle] ?? PAGES_LIMIT_DEFAULT;
                const uriArr = item.uri.split('/');

                console.log({
                    limit,
                    index: i + 1,
                });

                if (limit === 0) return;
                if (limit === i + 1) return;

                uri.push({ slug: uriArr });

                // if (!pages?.[handle]) {
                //     pages = Object.assign(pages ?? {}, {
                //         // [handle]: {
                //         //     // limit: props?.limit?.[handle] ?? PAGES_LIMIT_DEFAULT,
                //         //     items: [item.uri.split('/')],
                //         // },
                //         [handle]: [{ slug: uriArr }],
                //     });
                //
                //     // pages[handle] = [];
                // }
                //
                // if (pages?.[handle]) {
                //     pages[handle].push({ slug: uriArr });
                // }
            });
        }

        // console.log({ pages });

        console.log({ uri, length: uri.length });

        // const { data } = await apolloClient.query({
        //     query: ENTRY_URI_QUERY,
        //     variables: props?.limit ?? {},
        // });
        //
        // if (data) {
        //     Object.values(data).forEach((item: any) => {
        //         if (item?.docs && item.docs.length > 0) {
        //             item.docs.forEach((itm: any) => {
        //                 const uriArr = itm.uri.split('/');
        //
        //                 if (uriArr.length > 0) uri.push({ slug: uriArr });
        //             });
        //         }
        //     });
        // }
    } catch {}

    return uri;
};
