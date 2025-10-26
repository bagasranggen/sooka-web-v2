import { gql } from '@apollo/client';

import { FRAGMENT_CATEGORY } from '@/graphql/queries/entries/fragments/FragmentCategory';
import { FRAGMENT_PRICE } from '@/graphql/queries/entries/fragments/FragmentPrice';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_PRODUCT_INFO = gql`
    fragment productInfo on Product {
        thumbnail {
            ...thumbnailMedia
        }

        thumbnailHover {
            ...thumbnailMedia
        }

        category {
            ...category
        }

        prices {
            price {
                ...price
            }
        }
    }

    ${FRAGMENT_CATEGORY}
    ${FRAGMENT_PRICE}
    ${FRAGMENT_MEDIA({
        name: 'thumbnail',
        on: 'MediaProduct',
        sizesHandles: [
            'bannerDesktop',
            'bannerTablet',
            'bannerMobile',
            'productDetailBanner',
            'productDetailSticky',
            'productDetailMobile',
            'productListingThumbnail',
            'productListingThumbnailMobile',
        ],
    })}
`;
