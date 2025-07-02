import { CollectionConfig } from 'payload';
import { BasePageTab } from '@/collections/shared';

export const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab({
                    typeHandle: 'typeSectionTagsEntry',
                    // withStatus: true,
                }),
            ],
        },
    ],
};
