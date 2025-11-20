import { gql } from '@apollo/client';

import { FRAGMENT_PRODUCT_BASE } from '@/graphql/queries/entries/fragments/FragmentProductBase';
import { FRAGMENT_PRODUCT_INFO } from '@/graphql/queries/entries/fragments/FragmentProductInfo';
import { FRAGMENT_PRODUCT_DETAIL } from '@/graphql/queries/entries/fragments/FragmentProductDetail';

export const PRODUCT_DETAIL_QUERY = gql`
    query ProductDetailQuery($slug: String) {
        products: Products(where: { slug: { equals: $slug }, entryStatus: { equals: live } }) {
            docs {
                ...productBase
                ...productInfo
                ...productDetail
            }
        }
    }

    ${FRAGMENT_PRODUCT_BASE}
    ${FRAGMENT_PRODUCT_INFO}
    ${FRAGMENT_PRODUCT_DETAIL}
`;
