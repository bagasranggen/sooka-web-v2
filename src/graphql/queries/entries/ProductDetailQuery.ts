import { gql } from '@apollo/client';

import { FRAGMENT_PRODUCT } from '@/graphql/queries/entries/fragments/FragmentProduct';
import { FRAGMENT_PRODUCT_DETAIL } from '@/graphql/queries/entries/fragments/FragmentProductDetail';

export const PRODUCT_DETAIL_QUERY = gql`
    query ProductDetailQuery($slug: String) {
        products: Products(where: { slug: { equals: $slug } }) {
            docs {
                ...product
                ...productDetail
            }
        }
    }

    ${FRAGMENT_PRODUCT}
    ${FRAGMENT_PRODUCT_DETAIL}
`;
