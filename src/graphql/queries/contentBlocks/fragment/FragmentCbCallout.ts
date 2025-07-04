import { gql } from '@apollo/client';

import { CONTENT_BLOCK_INTERFACE, CONTENT_BLOCK_TYPE } from '@/components/common/ContentBlocks/handles';

import { FRAGMENT_LINK } from '@/graphql/queries/fragments/FragmentLink';
import { FRAGMENT_CB_COMMON } from '@/graphql/queries/contentBlocks/fragment/FragmentCbCommon';
import { FRAGMENT_CB_SETTINGS } from '@/graphql/queries/contentBlocks/fragment/FragmentCbSettings';

export const FRAGMENT_CB_CALLOUT = gql`
    fragment cbCallout on ContentBlockCallout {
        link {
            ...link
        }
        
        ${`...cbCommon${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.CALLOUT]}`}
        ${`...cbSetting${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.CALLOUT]}`}
    }
    
    ${FRAGMENT_LINK}
    ${FRAGMENT_CB_COMMON[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.CALLOUT]]}
    ${FRAGMENT_CB_SETTINGS[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.CALLOUT]]}
`;
