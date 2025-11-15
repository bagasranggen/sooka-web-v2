import { PageUriItemProps } from '@/libs/@types';

import { PAGES_HANDLES } from '@/components/pages/handles';
import { PAGES_LIMIT_DEFAULT } from '@/components/pages/handlesLimit';

import { axiosClient } from '@/libs/fetcher';

export const getPagesUri = async (props?: { limit?: any }) => {
    const uri: PageUriItemProps[] = [{ slug: [''] }];

    try {
        const { data: pagesData } = await axiosClient().get(`/pages`);

        let pages:
            | Record<string, { typeHandle: string; items: PageUriItemProps[] }>
            | { typeHandle: string; items: PageUriItemProps[] }[]
            | undefined = undefined;

        if (pagesData?.pages?.docs && pagesData.pages.docs.length > 0) {
            pagesData.pages.docs.forEach((item: any) => {
                const handle = item.typeHandle;
                const uriArr = item.uri.split('/');

                if (handle === PAGES_HANDLES.HOMEPAGE) return;

                if (pages && !Array.isArray(pages) && pages?.[handle]) {
                    pages[handle].items.push({ slug: uriArr });
                }

                if (!Array.isArray(pages) && !pages?.[handle]) {
                    pages = Object.assign(pages ?? {}, {
                        [handle]: {
                            typeHandle: handle,
                            items: [{ slug: uriArr }],
                        },
                    });
                }
            });

            if (pages) pages = Object.values(pages);
        }

        if (pages && Array.isArray(pages)) {
            pages.forEach(({ typeHandle, items }) => {
                const limit = props?.limit?.[typeHandle] ?? PAGES_LIMIT_DEFAULT;

                items.forEach((item, i: number) => {
                    if (limit > PAGES_LIMIT_DEFAULT && limit < i + 1) return;

                    uri.push(item);
                });
            });
        }
    } catch {}

    return uri;
};
