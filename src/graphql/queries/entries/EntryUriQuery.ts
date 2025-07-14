import { gql } from '@apollo/client';

import { PAGES_TYPES } from '@/components/pages/handles';

export const ENTRY_URI_QUERY = gql`
    ${`
        query EntryUriQuery(${PAGES_TYPES.map((handle: string) => `$limit${handle}: Int`)}) {
            ${PAGES_TYPES.map(
                (handle: string) => `
                ${handle}(where: { entryStatus: { equals: live } }, limit: $limit${handle}) {
                    docs {
                        uri
                        entryStatus
                    }
                }
            `
            )}
        }
    `}
`;
