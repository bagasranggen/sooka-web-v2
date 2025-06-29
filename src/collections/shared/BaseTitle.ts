import { Field } from 'payload';
import slugify from 'slugify';

export const BaseTitle: Field[] = [
    {
        name: 'title',
        type: 'text',
        required: true,
        admin: {
            width: '80%',
        },
    },
    {
        name: 'slug',
        type: 'text',
        access: {
            create: () => false,
            update: () => false,
        },
        admin: {
            width: '20%',
        },
        hooks: {
            beforeChange: [
                ({ siblingData }) => {
                    return slugify(siblingData?.title ?? '', { lower: true });
                },
            ],
        },
    },
];
