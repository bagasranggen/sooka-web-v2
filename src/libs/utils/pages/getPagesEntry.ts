import { apolloClient } from '@/libs/fetcher';
import { ENTRY_CHECK_QUERY } from '@/graphql';

export type GetPagesEntryTypes = {
    uri?: string;
    uriArr?: string[];
};

export const getPagesEntry = async ({ uri, uriArr }: GetPagesEntryTypes) => {
    let slug = undefined;
    if (uriArr && uriArr.length > 0) slug = uriArr[uriArr.length - 1];

    let typeHandle: string | undefined = undefined;

    try {
        if (!uri) return;

        const { data } = await apolloClient.query({
            query: ENTRY_CHECK_QUERY,
            variables: {
                uri,
                isHomepage: uri === '__home__',
            },
        });

        let tmp = undefined;

        if (data?.Homepage?.typeHandle) tmp = data.Homepage;
        if (data?.Pages?.docs?.[0]?.typeHandle) tmp = data.Pages.docs[0];
        if (data?.Products?.docs?.[0]?.typeHandle) tmp = data.Products.docs[0];

        if (tmp && tmp?.typeHandle) typeHandle = tmp.typeHandle;
        if (!tmp || !tmp?.typeHandle) typeHandle = 'not-found';
    } catch (e) {
        throw new Error(e as any);
    }

    return { typeHandle, slug };
};
