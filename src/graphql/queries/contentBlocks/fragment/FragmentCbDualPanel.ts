import { gql } from '@apollo/client';

import { CONTENT_BLOCK_INTERFACE, CONTENT_BLOCK_TYPE } from '@/components/common/ContentBlocks/handles';
import { FRAGMENT_CB_COMMON } from '@/graphql/queries/contentBlocks/fragment/FragmentCbCommon';
import { FRAGMENT_CB_SETTINGS } from '@/graphql/queries/contentBlocks/fragment/FragmentCbSettings';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_CB_DUAL_PANEL = gql`
    fragment cbDualPanel on ContentBlockDualPanel {
        ${`...cbCommon${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.DUAL_PANEL]}`}
        ${`...cbSetting${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.DUAL_PANEL]}`}
        
        layout

        contents {
            type
            description
            
            media {
                ...dualPanelMedia
            }
        }
    }

    ${FRAGMENT_CB_COMMON[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.DUAL_PANEL]]}
    ${FRAGMENT_CB_SETTINGS[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.DUAL_PANEL]]}
    ${FRAGMENT_MEDIA({
        name: 'dualPanel',
        on: 'MediaGallery',
        sizesHandles: ['media950x594', 'media950x975', 'mediaSquare', 'media4x3'],
    })} 
`;
