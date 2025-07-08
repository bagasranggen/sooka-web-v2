import { GlobalConfig } from 'payload';
import { BaseLink, BaseStatus } from '@/collections/shared';

export const Navigation: GlobalConfig = {
    slug: 'navigation',
    label: 'Header Navigation',
    access: {
        read: async ({ req: { headers, payload } }) => {
            // const headers = req.headers;
            const auth = headers.get('authorization');

            const tokens: string[] = [];

            const tokensDocs = await payload.find({
                collection: 'tokens' as any,
            });

            if (tokensDocs?.docs && tokensDocs.docs.length > 0) {
                tokensDocs.docs.forEach((item: any) => {
                    console.log(item);

                    if (item?.apiKey) tokens.push(item.apiKey);
                });
            }

            console.log({ tokens, auth, auths: tokens.some((item) => auth?.includes(item)) });

            // console.log({ tokens: tokens.docs });

            // console.log({ user, payload });

            // const usersQuery = await payload.find({
            //     collection: 'users',
            //     where: {
            //         code: {
            //             equals: headers.get('code'),
            //         },
            //         secret: {
            //             equals: headers.get('secret'),
            //         },
            //     },
            // });

            //
            // console.log({ headers, auth: auth.includes(process.env.GQL_TOKEN) });

            // console.log(args);

            // return true;
            return tokens.some((item) => auth?.includes(item));
            // return !!auth?.includes(process.env.GQL_TOKEN);
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
