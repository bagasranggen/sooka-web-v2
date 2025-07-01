import { gql } from '@apollo/client';

import { FRAGMENT_PRODUCT } from '@/graphql/queries/entries/fragments/FragmentProduct';

export const PRODUCT_DETAIL_QUERY = gql`
    query ProductDetailQuery($slug: String) {
        products: Products(where: { slug: { equals: $slug } }) {
            docs {
                ...product
            }
        }
    }

    ${FRAGMENT_PRODUCT}
`;
