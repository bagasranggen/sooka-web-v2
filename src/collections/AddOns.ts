import { CollectionConfig } from 'payload';
import { BasePageTab, BasePrice } from '@/collections/shared';

export const AddOns: CollectionConfig = {
    slug: 'addons',
    labels: { plural: 'Add-ons', singular: 'Add-on' },
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
                    typeHandle: 'typeSectionCategoriesIndex',
                    updateUrl: async ({ url, siblingData }) => {
                        await new Promise((resolve) => {
                            setTimeout(() => {
                                if (siblingData.slug) url.push(siblingData.slug);
                                resolve(true);
                            }, 30);
                        });
                    },
                }),
                {
                    label: 'Content',
                    fields: [
                        {
                            type: 'array',
                            name: 'prices',
                            fields: BasePrice,
                        },
                    ],
                },
            ],
        },
    ],
};
