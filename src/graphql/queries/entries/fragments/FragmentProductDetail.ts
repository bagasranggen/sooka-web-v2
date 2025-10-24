import { gql } from '@apollo/client';

import { FRAGMENT_META } from '@/graphql/queries/fragments/FragmentMeta';
import { FRAGMENT_ADDON } from '@/graphql/queries/entries/fragments/FragmentAddon';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_PRODUCT_DETAIL = gql`
    fragment productDetail on Product {
        meta {
            ...meta
        }

        addons {
            ...addon
        }

        marquee {
            ...marqueeMedia
        }

        flavour {
            freshCreamy
            custardySpongy
            tangySweet
        }
    }

    ${FRAGMENT_META}
    ${FRAGMENT_ADDON}
    ${FRAGMENT_MEDIA({
        name: 'marquee',
        on: 'MediaProduct',
        sizesHandles: ['productMarquee', 'productMarqueeMobile'],
    })}
`;
