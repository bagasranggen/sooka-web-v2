import { gql } from '@apollo/client';

import { FRAGMENT_TAG } from '@/graphql/queries/entries/fragments/FragmentTag';
import { FRAGMENT_PRODUCT } from '@/graphql/queries/entries/fragments/FragmentProduct';

export const FRAGMENT_HOMEPAGE_HIGHLIGHT = gql`
    fragment homepageHighlight on Homepage_Highlights {
        tag {
            ...tag
        }

        products {
            ...product
        }
    }

    ${FRAGMENT_TAG}
    ${FRAGMENT_PRODUCT}
`;
