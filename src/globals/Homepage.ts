import { GlobalConfig } from 'payload';
import { BaseLink, BaseStatus, BaseTarget } from '@/collections/shared';

export const Homepage: GlobalConfig = {
    slug: 'homepage',
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Banner',
                    fields: [
                        {
                            type: 'array',
                            name: 'bannerMedia',
                            label: 'Media',
                            labels: {
                                singular: 'Media',
                                plural: 'Media',
                            },
                            fields: [
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            type: 'select',
                                            name: 'source',
                                            options: [
                                                { value: 'products', label: 'Products' },
                                                { value: 'custom', label: 'Custom' },
                                            ],
                                        },
                                        BaseStatus({
                                            withStatus: true,
                                            width: '10%',
                                        }),
                                    ],
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            type: 'relationship',
                                            name: 'tag',
                                            relationTo: 'tags',
                                            admin: { width: '50%' },
                                        },
                                        {
                                            type: 'select',
                                            name: 'textAlign',
                                            defaultValue: 'left',
                                            options: [
                                                { value: 'left', label: 'Left' },
                                                { value: 'right', label: 'Right' },
                                            ],
                                            admin: { width: '50%' },
                                        },
                                    ],
                                },
                                {
                                    type: 'group',
                                    label: 'Custom Content',
                                    admin: {
                                        condition: (data, siblingData) => siblingData?.source === 'custom',
                                    },
                                    fields: [
                                        {
                                            type: 'upload',
                                            name: 'media',
                                            relationTo: 'media',
                                        },
                                        {
                                            type: 'text',
                                            name: 'title',
                                        },
                                        {
                                            type: 'richText',
                                            name: 'description',
                                        },
                                        BaseLink(),
                                    ],
                                },
                                {
                                    type: 'group',
                                    label: 'Product',
                                    admin: {
                                        condition: (data, siblingData) => siblingData?.source === 'products',
                                    },
                                    fields: [
                                        {
                                            type: 'row',
                                            fields: [
                                                {
                                                    type: 'relationship',
                                                    name: 'product',
                                                    label: false,
                                                    relationTo: 'products',
                                                },
                                                BaseTarget({
                                                    name: 'productTarget',
                                                    width: '15%',
                                                    style: {
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                    },
                                                }),
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
