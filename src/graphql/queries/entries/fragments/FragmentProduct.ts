import { gql } from '@apollo/client';

import { FRAGMENT_CATEGORY } from '@/graphql/queries/entries/fragments/FragmentCategory';

export const FRAGMENT_PRODUCT = gql`
    fragment product on Product {
        title
        slug
        url
        uri

        thumbnail {
            ...thumbnail
        }

        thumbnailHover {
            ...thumbnail
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

    fragment thumbnail on Media {
        src: url
        width
        height
        filename
        alt

        sizes {
            productDetailBanner {
                src: url
                width
                height
            }

            productDetailSticky {
                src: url
                width
                height
            }

            productDetailMobile {
                src: url
                width
                height
            }

            productListingThumbnail {
                src: url
                width
                height
            }

            productListingThumbnailMobile {
                src: url
                width
                height
            }
        }
    }
`;
