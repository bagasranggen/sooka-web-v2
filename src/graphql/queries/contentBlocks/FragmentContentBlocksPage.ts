import { gql } from '@apollo/client';

import { FRAGMENT_CONTENT_BLOCK_HEADING } from '@/graphql/queries/contentBlocks/fragment/FragmentContentBlockHeading';
import { FRAGMENT_CB_GALLERY } from '@/graphql/queries/contentBlocks/fragment/FragmentCbGallery';
import { FRAGMENT_CB_RELATED_PRODUCTS } from '@/graphql/queries/contentBlocks/fragment/FragmentCbRelatedProducts';

export const FRAGMENT_CONTENT_BLOCKS_PAGE = gql`
    fragment pageContentBlocks on Page {
        contentBlocks {
            ...cbGallery
            ...cbHeading
            ...cbRelatedProducts
        }
    }

    ${FRAGMENT_CONTENT_BLOCK_HEADING}
    ${FRAGMENT_CB_GALLERY}
    ${FRAGMENT_CB_RELATED_PRODUCTS}
`;
