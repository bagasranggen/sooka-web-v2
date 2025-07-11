import { gql } from '@apollo/client';

import { CONTENT_BLOCK_INTERFACE, CONTENT_BLOCK_TYPE } from '@/components/common/ContentBlocks/handles';
import { FRAGMENT_CB_COMMON } from '@/graphql/queries/contentBlocks/fragment/FragmentCbCommon';
import { FRAGMENT_CB_SETTINGS } from '@/graphql/queries/contentBlocks/fragment/FragmentCbSettings';

export const FRAGMENT_CB_GALLERY = gql`
    fragment cbGallery on ContentBlockGallery {
        ${`...cbCommon${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.GALLERY]}`}
        ${`...cbSetting${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.GALLERY]}`}
    }

    ${FRAGMENT_CB_COMMON[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.GALLERY]]}
    ${FRAGMENT_CB_SETTINGS[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.GALLERY]]}    
`;
