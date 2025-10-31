import { gql } from '@apollo/client';

import { CONTENT_BLOCK_INTERFACE, CONTENT_BLOCK_TYPE } from '@/components/common/ContentBlocks/handles';
import { FRAGMENT_CB_SETTINGS } from '@/graphql/queries/contentBlocks/fragment/FragmentCbSettings';
import { FRAGMENT_CB_COMMON } from '@/graphql/queries/contentBlocks/fragment/FragmentCbCommon';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_CB_MARQUEE = gql`
    fragment cbMarquee on ContentBlockMarquee {
        media {
            ...cbMarqueeMedia
        }
        
        ${`...cbCommon${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.MARQUEE]}`}
        ${`...cbSetting${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.MARQUEE]}`}
    }
    
    ${FRAGMENT_CB_COMMON[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.MARQUEE]]}
    ${FRAGMENT_CB_SETTINGS[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.MARQUEE]]}
    ${FRAGMENT_MEDIA({
        name: 'cbMarquee',
        on: 'MediaGallery',
        sizesHandles: ['marquee', 'marqueeMobile'],
    })} 
`;
