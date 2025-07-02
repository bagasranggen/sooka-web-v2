import { gql } from '@apollo/client';

import { FRAGMENT_TAG } from '@/graphql/queries/entries/fragments/FragmentTag';
import { FRAGMENT_PRODUCT } from '@/graphql/queries/entries/fragments/FragmentProduct';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';
import { FRAGMENT_LINK } from '@/graphql/queries/fragments/FragmentLink';

export const HOMEPAGE_QUERY = gql`
    query HomepageQuery {
        entry: Homepage {
            bannerMedia {
                entryStatus
                source
                textAlign
                title
                description
                productTarget

                link {
                    ...bannerCustomLink
                }

                media {
                    ...bannerMedia
                }

                tag {
                    ...tag
                }

                product {
                    ...product
                }
            }
        }
    }

    ${FRAGMENT_TAG}
    ${FRAGMENT_PRODUCT}
    ${FRAGMENT_MEDIA({ name: 'banner', sizesHandles: ['bannerDesktop', 'bannerTablet', 'bannerMobile'] })}
    ${FRAGMENT_LINK({ name: 'bannerCustomLink', handle: 'Homepage_BannerMedia_Link' })}
`;
