import { gql } from '@apollo/client';

import { FRAGMENT_TAG } from '@/graphql/queries/entries/fragments/FragmentTag';
import { FRAGMENT_PRODUCT_BASE } from '@/graphql/queries/entries/fragments/FragmentProductBase';
import { FRAGMENT_PRODUCT_INFO } from '@/graphql/queries/entries/fragments/FragmentProductInfo';

export const FRAGMENT_HOMEPAGE_HIGHLIGHT = gql`
    fragment homepageHighlight on Homepage_Highlights {
        tag {
            ...tag
        }

        products {
            ...productBase
            ...productInfo
        }
    }

    ${FRAGMENT_TAG}
    ${FRAGMENT_PRODUCT_BASE}
    ${FRAGMENT_PRODUCT_INFO}
`;
