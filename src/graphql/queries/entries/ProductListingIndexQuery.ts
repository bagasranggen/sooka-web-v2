import { gql } from '@apollo/client';

import { FRAGMENT_CATEGORY } from '@/graphql/queries/entries/fragments/FragmentCategory';

export const PRODUCT_LISTING_INDEX_QUERY = gql`
    query ProductListingIndexQuery($uri: String) {
        entries: Pages(where: { uri: { equals: $uri } }) {
            docs {
                category {
                    ...category
                }

                title
                description: headerDescription
            }
        }
    }

    ${FRAGMENT_CATEGORY}
`;
