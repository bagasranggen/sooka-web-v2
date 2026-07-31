import { gql } from '@apollo/client';

export const ENTRY_CHECK_QUERY = gql`
    query EntryCheckQuery($uri: String, $isHomepage: Boolean! = false) {
        Homepage @include(if: $isHomepage) {
            typeHandle
            uri
        }

        Pages(where: { uri: { equals: $uri } }) @skip(if: $isHomepage) {
            docs {
                typeHandle
                uri
            }
        }

        Products(where: { uri: { equals: $uri } }) @skip(if: $isHomepage) {
            docs {
                typeHandle
                entryStatus
            }
        }
    }
`;
