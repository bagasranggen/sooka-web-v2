import { gql } from '@apollo/client';
import { FRAGMENT_PRODUCT } from '@/graphql/queries/entries/fragments/FragmentProduct';

export const PRODUCT_LISTING_QUERY = gql`
    query ProductListingQuery($category: JSON) {
        products: Products(where: { category: { equals: $category } }) {
            docs {
                ...product
            }
        }
    }

    ${FRAGMENT_PRODUCT}
`;
