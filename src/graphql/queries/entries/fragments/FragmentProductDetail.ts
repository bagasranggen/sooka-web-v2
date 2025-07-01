import { gql } from '@apollo/client';
import { FRAGMENT_ADDON } from '@/graphql/queries/entries/fragments/FragmentAddon';

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

    fragment marqueeMedia on Media {
        src: url
        width
        height
        filename
        alt

        sizes {
            productMarquee {
                src: url
                width
                height
            }

            productMarqueeMobile {
                src: url
                width
                height
            }
        }
    }
`;
