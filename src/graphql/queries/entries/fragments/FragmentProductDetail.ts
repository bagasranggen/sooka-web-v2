import { gql } from '@apollo/client';

import { FRAGMENT_ADDON } from '@/graphql/queries/entries/fragments/FragmentAddon';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_PRODUCT_DETAIL = gql`
    fragment productDetail on Product {
        addons {
            ...addon
        }

        marquee {
            ...marqueeMedia
        }
    }

    ${FRAGMENT_ADDON}
    ${FRAGMENT_MEDIA({ name: 'marquee', sizesHandles: ['productMarquee', 'productMarqueeMobile'] })}
`;
