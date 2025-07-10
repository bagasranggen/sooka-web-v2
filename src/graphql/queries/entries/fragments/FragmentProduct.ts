import { gql } from '@apollo/client';

import { FRAGMENT_CATEGORY } from '@/graphql/queries/entries/fragments/FragmentCategory';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_PRODUCT = gql`
    fragment product on Product {
        title
        slug
        url
        uri
        description

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
            price
            salePrice
            note
        }
    }

    ${FRAGMENT_CATEGORY}
    ${FRAGMENT_MEDIA({
        name: 'thumbnail',
        sizesHandles: [
            'bannerDesktop',
            'bannerTablet',
            'bannerMobile',
            'productDetailBanner',
            'productDetailSticky',
            'productDetailMobile',
            'productListingThumbnail',
            'assets400x400',
        ],
    })}
`;
