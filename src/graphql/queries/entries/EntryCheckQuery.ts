import { gql } from '@apollo/client';

import { PAGES_TYPES } from '@/components/pages/handles';

export const ENTRY_CHECK_QUERY = gql`
    query EntryCheckQuery($uri: String) {
        ${`
            ${PAGES_TYPES.map(
                (handle) => `
                    ${handle}(where: { uri: { equals: $uri }, entryStatus: { equals: live } }) {
                        docs {
                            typeHandle
                            uri
                        }
                    }
            `
            )}
        `}
    }
`;
