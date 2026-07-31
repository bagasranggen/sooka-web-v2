import { gql } from '@apollo/client';

export const ENTRY_URI_QUERY = gql`
    query EntryCheckQuery(
        $uri: String
        $typeHandle: Page_typeHandle_Input
        $isProducts: Boolean! = false
        $limit: Int
    ) {
        Pages(limit: $limit, where: { uri: { equals: $uri }, typeHandle: { equals: $typeHandle } })
            @skip(if: $isProducts) {
            docs {
                typeHandle
                uri
            }
        }

        Products(limit: $limit, where: { uri: { equals: $uri } }) @include(if: $isProducts) {
            docs {
                typeHandle
                uri
            }
        }
    }
`;
