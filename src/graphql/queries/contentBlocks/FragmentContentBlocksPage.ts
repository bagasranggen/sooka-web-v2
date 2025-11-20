import { gql } from '@apollo/client';

import { FRAGMENT_CB_CALLOUT } from '@/graphql/queries/contentBlocks/fragment/FragmentCbCallout';
import { FRAGMENT_CB_DUAL_PANEL } from '@/graphql/queries/contentBlocks/fragment/FragmentCbDualPanel';
import { FRAGMENT_CB_GALLERY } from '@/graphql/queries/contentBlocks/fragment/FragmentCbGallery';
import { FRAGMENT_CB_HEADING } from '@/graphql/queries/contentBlocks/fragment/FragmentCbHeading';
import { FRAGMENT_CB_MARQUEE } from '@/graphql/queries/contentBlocks/fragment/FragmentCbMarquee';
import { FRAGMENT_CB_RELATED_PRODUCTS } from '@/graphql/queries/contentBlocks/fragment/FragmentCbRelatedProducts';

export const FRAGMENT_CONTENT_BLOCKS_PAGE = gql`
    fragment pageContentBlocks on Page {
        contentBlocks {
            ...cbCallout
            ...cbDualPanel
            ...cbGallery
            ...cbHeading
            ...cbMarquee
            ...cbRelatedProducts
        }
    }

    ${FRAGMENT_CB_CALLOUT}
    ${FRAGMENT_CB_DUAL_PANEL}
    ${FRAGMENT_CB_GALLERY}
    ${FRAGMENT_CB_HEADING}
    ${FRAGMENT_CB_MARQUEE}
    ${FRAGMENT_CB_RELATED_PRODUCTS}
`;
