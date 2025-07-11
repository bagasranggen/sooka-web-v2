import { gql } from '@apollo/client';

import { FRAGMENT_PRODUCT_BASE } from '@/graphql/queries/entries/fragments/FragmentProductBase';
import { FRAGMENT_PRODUCT_INFO } from '@/graphql/queries/entries/fragments/FragmentProductInfo';

export const PRODUCT_LISTING_QUERY = gql`
    query ProductListingQuery($category: JSON) {
        products: Products(where: { category: { equals: $category }, entryStatus: { equals: live } }) {
            docs {
                ...productBase
                ...productInfo
            }
        }
    }

    ${FRAGMENT_PRODUCT_BASE}
    ${FRAGMENT_PRODUCT_INFO}
`;
