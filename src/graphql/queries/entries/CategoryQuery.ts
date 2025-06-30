import { gql } from '@apollo/client';

import { FRAGMENT_CATEGORY } from '@/graphql/queries/entries/fragments/FragmentCategory';

export const CATEGORY_QUERY = gql`
    query CategoryQuery($slug: String) {
        categories: Categories(where: { slug: { equals: $slug } }) {
            docs {
                ...category
            }
        }
    }

    ${FRAGMENT_CATEGORY}
`;
