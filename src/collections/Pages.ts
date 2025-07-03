import { CollectionConfig } from 'payload';
import { BasePageTab } from '@/collections/shared';
import { ContentBlockGallery, ContentBlockHeading } from '@/collections/blocks';

export const Pages: CollectionConfig = {
    slug: 'pages',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
        group: 'Content',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab({
                    typeHandle: 'typeSectionPagesIndex',
                    withStatus: true,
                    withUrl: true,
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
                            type: 'blocks',
                            name: 'contentBlocks',
                            blocks: [ContentBlockGallery, ContentBlockHeading],
                        },
                    ],
                },
            ],
        },
    ],
};
