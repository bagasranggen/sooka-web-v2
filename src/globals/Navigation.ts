import { GlobalConfig } from 'payload';
import { BaseLink, BaseStatus } from '@/collections/shared';

export const Navigation: GlobalConfig = {
    slug: 'navigation',
    label: 'Header Navigation',
    access: {
        read: ({ req }) => {
            const headers = req.headers;
            const auth = headers.get('authorization');
            //
            console.log({ headers, auth: auth.includes(process.env.GQL_TOKEN) });

            // console.log(args);

            // return true;
            return auth.includes(process.env.GQL_TOKEN);
        },
        // read: () => true,
    },
    admin: {
        group: 'Navigation',
    },
    fields: [
        {
            type: 'array',
            name: 'navigations',
            fields: [
                {
                    type: 'row',
                    fields: [BaseStatus({ withStatus: true, width: '15%' })],
                },
                BaseLink(),
            ],
        },
    ],
};
