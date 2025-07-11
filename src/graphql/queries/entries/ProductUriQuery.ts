import { gql } from '@apollo/client';

import { FRAGMENT_PRODUCT_BASE } from '@/graphql/queries/entries/fragments/FragmentProductBase';

export const PRODUCT_URI_QUERY = gql`
    query ProductUriQuery {
        products: Products(where: { entryStatus: { equals: live } }) {
            docs {
                ...productBase
            }
        }
    }

    ${FRAGMENT_PRODUCT_BASE}
`;
