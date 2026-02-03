import { gql } from '@apollo/client';

import { FRAGMENT_META } from '@/graphql/queries/fragments/FragmentMeta';
import { FRAGMENT_ADDON } from '@/graphql/queries/entries/fragments/FragmentAddon';
import { FRAGMENT_TAG } from '@/graphql/queries/entries/fragments/FragmentTag';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_PRODUCT_DETAIL = gql`
    fragment productDetail on Product {
        meta {
            ...meta
        }

        badge {
            ...tag
        }

        addons {
            ...addon
        }

        marquee {
            ...marqueeMedia
        }

        flavour {
            showFlavour
            freshCreamy
            custardySpongy
            tangySweet
        }
    }

    ${FRAGMENT_META}
    ${FRAGMENT_ADDON}
    ${FRAGMENT_TAG}
    ${FRAGMENT_MEDIA({
        name: 'marquee',
        on: 'MediaProduct',
        sizesHandles: ['productMarquee', 'productMarqueeMobile'],
    })}
`;
