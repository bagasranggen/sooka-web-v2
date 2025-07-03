import { Block } from 'payload';
// import { ContentBlockSettings } from '@/collections/blocks/ContentBlockSettings';

export const ContentBlockHeading: Block = {
    slug: 'heading',
    interfaceName: 'ContentBlockHeading',
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
                        {
                            type: 'text',
                            name: 'title',
                        },
                    ],
                },
                // {
                //     label: 'Setting',
                //     fields: [...ContentBlockSettings],
                // },
            ],
        },
    ],
};
