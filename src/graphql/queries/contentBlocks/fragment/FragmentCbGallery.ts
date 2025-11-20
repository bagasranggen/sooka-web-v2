import { gql } from '@apollo/client';

import { CONTENT_BLOCK_INTERFACE, CONTENT_BLOCK_TYPE } from '@/components/common/ContentBlocks/handles';
import { FRAGMENT_CB_COMMON } from '@/graphql/queries/contentBlocks/fragment/FragmentCbCommon';
import { FRAGMENT_CB_SETTINGS } from '@/graphql/queries/contentBlocks/fragment/FragmentCbSettings';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_CB_GALLERY = gql`
    fragment cbGallery on ContentBlockGallery {
        ${`...cbCommon${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.GALLERY]}`}
        ${`...cbSetting${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.GALLERY]}`}
        
        media {
            ...collageMedia
        }
    }

    ${FRAGMENT_CB_COMMON[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.GALLERY]]}
    ${FRAGMENT_CB_SETTINGS[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.GALLERY]]}
    ${FRAGMENT_MEDIA({
        name: 'collage',
        on: 'MediaGallery',
        sizesHandles: ['collage1x1', 'collage4x3', 'collage3x4', 'collage3x2', 'collage2x3'],
    })} 
`;
