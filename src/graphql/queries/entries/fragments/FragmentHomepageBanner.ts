import { gql } from '@apollo/client';

import { FRAGMENT_TAG } from '@/graphql/queries/entries/fragments/FragmentTag';
import { FRAGMENT_PRODUCT_BASE } from '@/graphql/queries/entries/fragments/FragmentProductBase';
import { FRAGMENT_PRODUCT_INFO } from '@/graphql/queries/entries/fragments/FragmentProductInfo';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';
import { FRAGMENT_LINK } from '@/graphql/queries/fragments/FragmentLink';

export const FRAGMENT_HOMEPAGE_BANNER = gql`
    fragment homepageBanner on Homepage_BannerMedia {
        entryStatus
        source
        textAlign
        title
        description
        productTarget

        link {
            ...link
        }

        media {
            ...bannerMedia
        }

        tag {
            ...tag
        }

        product {
            ...productBase
            ...productInfo
        }
    }

    ${FRAGMENT_TAG}
    ${FRAGMENT_PRODUCT_BASE}
    ${FRAGMENT_PRODUCT_INFO}
    ${FRAGMENT_LINK}
    ${FRAGMENT_MEDIA({ name: 'banner', sizesHandles: ['bannerDesktop', 'bannerTablet', 'bannerMobile'] })}
`;
