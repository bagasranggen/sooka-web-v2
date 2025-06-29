import type { CollectionConfig } from 'payload';
import { BaseTitle } from '@/collections/shared';

export const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'title',
    },
    auth: false,
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Page',
                    fields: [
                        {
                            type: 'row',
                            fields: [...BaseTitle],
                        },
                    ],
                },
            ],
        },
    ],
};
