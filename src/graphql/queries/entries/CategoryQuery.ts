import { gql } from '@apollo/client';

import { FRAGMENT_CATEGORY } from '@/graphql/queries/entries/fragments/FragmentCategory';
import { FRAGMENT_META } from '@/graphql/queries/fragments/FragmentMeta';

export const CATEGORY_QUERY = gql`
    query CategoryQuery($slug: String) {
        categories: Categories(where: { slug: { equals: $slug } }) {
            docs {
                ...category

                meta {
                    ...meta
                }
            }
        }
    }

    ${FRAGMENT_CATEGORY}
    ${FRAGMENT_META}
`;
