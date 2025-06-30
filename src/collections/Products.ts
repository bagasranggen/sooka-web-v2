import type { CollectionConfig } from 'payload';
import { BasePageTab } from '@/collections/shared';

export const Products: CollectionConfig = {
    slug: 'products',
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
                    typeHandle: 'typeSectionProductsIndex',
                    updateUrl: async ({ url, siblingData, req: { payload } }) => {
                        // Get Category Slug
                        try {
                            const category = await payload.findByID({
                                collection: 'categories',
                                id: siblingData.category,
                            } as any);

                            if ('uri' in category && category?.uri) url.push(category.uri);
                        } catch {}

                        if (siblingData?.slug) url.push(siblingData.slug);
                    },
                }),
                {
                    label: 'Media',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    type: 'upload',
                                    name: 'thumbnail',
                                    relationTo: 'media',
                                    admin: { width: '50%' },
                                },
                                {
                                    type: 'upload',
                                    name: 'thumbnailHover',
                                    relationTo: 'media',
                                    admin: { width: '50%' },
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'category',
                            type: 'relationship',
                            relationTo: 'categories',
                            required: true,
                        },
                        {
                            type: 'array',
                            name: 'prices',
                            fields: [
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            type: 'number',
                                            name: 'price',
                                            required: true,
                                            admin: {
                                                width: '50%',
                                            },
                                        },
                                        {
                                            type: 'number',
                                            name: 'salePrice',
                                            admin: {
                                                width: '50%',
                                            },
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    name: 'note',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
