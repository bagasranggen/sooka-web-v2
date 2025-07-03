import { Field } from 'payload';

export const ContentBlockSettings: Field[] = [
    {
        type: 'group',
        label: 'Spacing',
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        type: 'select',
                        name: 'marginTop',
                        options: [{ value: 'mt-1', label: '1' }],
                    },
                    // {
                    //     type: 'select',
                    //     name: 'bottoms',
                    //     options: [],
                    // },
                ],
            },
        ],
    },
];
