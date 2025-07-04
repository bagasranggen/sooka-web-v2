import { gql } from '@apollo/client';

import { FRAGMENT_CONTENT_BLOCK_HEADING } from '@/graphql/queries/contentBlocks/fragment/FragmentContentBlockHeading';

export const FRAGMENT_CONTENT_BLOCKS_PAGE = gql`
    fragment pageContentBlocks on Page {
        contentBlocks {
            ...cbHeading
        }
    }

    ${FRAGMENT_CONTENT_BLOCK_HEADING}
`;
