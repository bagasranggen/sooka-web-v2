import { gql } from '@apollo/client';

import { CONTENT_BLOCK_INTERFACE, CONTENT_BLOCK_TYPE } from '@/components/common/ContentBlocks/handles';

import { FRAGMENT_PRODUCT } from '@/graphql/queries/entries/fragments/FragmentProduct';
import { FRAGMENT_CB_COMMON } from '@/graphql/queries/contentBlocks/fragment/FragmentCbCommon';
import { FRAGMENT_CB_SETTINGS } from '@/graphql/queries/contentBlocks/fragment/FragmentCbSettings';

export const FRAGMENT_CB_RELATED_PRODUCTS = gql`
    fragment cbRelatedProducts on ContentBlockRelatedProducts {
        title
        
        products {
            ...product
        }
        
        ${`...cbCommon${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]}`}
        ${`...cbSetting${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]}`}
    }

    ${FRAGMENT_PRODUCT}
    ${FRAGMENT_CB_COMMON[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]]}
    ${FRAGMENT_CB_SETTINGS[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]]}
`;
