import { getPagesEntry, GetPagesEntryTypes } from '@/libs/utils';

import { PAGES_DATA_HANDLES } from '@/components/pages/handlesData';

export type GetPagesDataTypes = {
    onNotFound?: () => void;
} & GetPagesEntryTypes;

export const getPagesData = async ({ uri, uriArr, onNotFound }: GetPagesDataTypes) => {
    const entry = await getPagesEntry({
        uri,
        uriArr,
    });

    let dataProcessor = undefined;
    if (entry?.typeHandle) {
        dataProcessor = PAGES_DATA_HANDLES?.[entry.typeHandle as keyof typeof PAGES_DATA_HANDLES];
    }

    let data = undefined;

    if (entry?.typeHandle && dataProcessor) {
        try {
            data = await dataProcessor({
                type: entry.typeHandle,
                uri,
                slug: entry?.slug,
            });
        } catch {}
    }

    if (entry?.typeHandle && entry.typeHandle === 'not-found') {
        if (onNotFound) onNotFound();
    }

    return { data, entry };
};
