import { axiosClient } from '@/libs/fetcher';

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

        const { data } = await axiosClient().get(`/pages?uri=${uri}`);

        const d = data?.pages?.docs?.[0];

        if (d?.typeHandle) typeHandle = d?.typeHandle;

        if (!typeHandle) typeHandle = 'not-found';
    } catch {}

    return { typeHandle, slug };
};
