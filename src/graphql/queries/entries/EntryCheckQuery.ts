import { gql } from '@apollo/client';

export const PAGES_TYPES = ['Categories', 'Products', 'Pages'];

export const ENTRY_CHECK_QUERY = gql`
    query EntryCheckQuery($uri: String) {
        ${`
            ${PAGES_TYPES.map(
                (handle) => `
                    ${handle}(where: { uri: { equals: $uri } }) {
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
