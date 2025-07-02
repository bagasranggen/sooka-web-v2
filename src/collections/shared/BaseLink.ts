import { Field, ArrayField } from 'payload';

import { BaseTarget } from '@/collections/shared/BaseTarget';

export type BaseLinkProps = Pick<ArrayField, 'name' | 'maxRows'>;

export const BaseLink = (props?: BaseLinkProps): Field => {
    return {
        type: 'array',
        name: props?.name ?? 'link',
        maxRows: props?.maxRows ?? 1,
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        type: 'select',
                        name: 'source',
                        label: false,
                        admin: {
                            placeholder: 'Select link source',
                            width: '25%',
                        },
                        options: [
                            { value: 'products', label: 'Products' },
                            { value: 'custom', label: 'Custom' },
                        ],
                    },
                    {
                        type: 'relationship',
                        name: 'product',
                        label: false,
                        relationTo: 'products',
                        admin: {
                            condition: (data, siblingData) => siblingData?.source === 'products',
                        },
                    },
                    {
                        type: 'text',
                        name: 'custom',
                        label: false,
                        admin: {
                            condition: (data, siblingData) => siblingData?.source === 'custom',
                            placeholder: 'Type your custom URL (ex. https://www.sookabakedgoods.com/)',
                        },
                    },
                    BaseTarget({
                        condition: (data, siblingData) => siblingData?.source,
                        width: '15%',
                        style: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
                    }),
                ],
            },
            {
                type: 'text',
                name: 'label',
                admin: {
                    condition: (data, siblingData) => siblingData?.source,
                },
            },
        ],
    };
};
