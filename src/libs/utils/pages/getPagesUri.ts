import { Page, PageUriItemProps, Product } from '@/libs/@types';

import { PAGES_HANDLES } from '@/components/pages/handles';

import { apolloClient } from '@/libs/fetcher';
import { ENTRY_URI_QUERY } from '@/graphql';

export type GetPagesUriProps = {
    limit?: any;
    typeHandles?: string[];
};

export const getPagesUri = async (props?: GetPagesUriProps) => {
    const uri: PageUriItemProps[] = [{ slug: [] }];

    if (props?.typeHandles && props.typeHandles.length > 0) {
        for (const item of props.typeHandles) {
            try {
                const isProducts = item === PAGES_HANDLES.PRODUCT_DETAIL;

                let variables = { isProducts };
                if (!isProducts) variables = Object.assign(variables, { typeHandle: item });

                const { data } = await apolloClient.query({
                    query: ENTRY_URI_QUERY,
                    variables,
                });

                let docs: Product[] | Page[] = data?.Pages?.docs;
                if (isProducts) docs = data?.Products?.docs;

                if (docs && docs.length > 0) {
                    docs.forEach((item) => {
                        if (item?.uri) uri.push({ slug: item.uri.split('/') });
                    });
                }
            } catch {}
        }
    }

    return uri;
};
