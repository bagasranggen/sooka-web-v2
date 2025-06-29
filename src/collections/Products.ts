import type { CollectionConfig } from 'payload';
import { BasePageTab } from '@/collections/shared';

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab,
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'category',
                            type: 'relationship',
                            relationTo: 'categories',
                        },
                    ],
                },
            ],
        },
    ],
};
