import { gql } from '@apollo/client';

import { CONTENT_BLOCK_INTERFACE, CONTENT_BLOCK_TYPE } from '@/components/common/ContentBlocks/handles';
import { FRAGMENT_CONTENT_BLOCK_SETTINGS } from '@/graphql/queries/contentBlocks/fragment/FragmentContentBlockSettings';
import { FRAGMENT_CONTENT_BLOCK_COMMON } from '@/graphql/queries/contentBlocks/fragment/FragmentContentBlockCommon';

export const FRAGMENT_CONTENT_BLOCK_HEADING = gql`
    fragment cbHeading on ContentBlockHeading {
        title
        
        ${`...cbCommon${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.HEADING]}`}
        ${`...cbSetting${CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.HEADING]}`}
    }
    
    ${FRAGMENT_CONTENT_BLOCK_COMMON[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.HEADING]]}
    ${FRAGMENT_CONTENT_BLOCK_SETTINGS[CONTENT_BLOCK_INTERFACE[CONTENT_BLOCK_TYPE.HEADING]]}
`;
