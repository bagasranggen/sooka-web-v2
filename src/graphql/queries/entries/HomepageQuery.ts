import { gql } from '@apollo/client';

import { FRAGMENT_HOMEPAGE_BANNER } from '@/graphql/queries/entries/fragments/FragmentHomepageBanner';
import { FRAGMENT_HOMEPAGE_STORY } from '@/graphql/queries/entries/fragments/FragmentHomepageStory';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';
import { FRAGMENT_TESTIMONIAL } from '@/graphql/queries/entries/fragments/FragmentTestimonial';
import { FRAGMENT_HOMEPAGE_HIGHLIGHT } from '@/graphql/queries/entries/fragments/FragmentHomepageHighlight';
import { FRAGMENT_META } from '@/graphql/queries/fragments/FragmentMeta';

export const HOMEPAGE_QUERY = gql`
    query HomepageQuery {
        entry: Homepage {
            meta {
                ...meta
            }

            bannerMedia {
                ...homepageBanner
            }

            highlights {
                ...homepageHighlight
            }

            ...homepageStory

            orderDescription
            orderSteps {
                title
                description
            }

            imageDividerMedia {
                ...homepageDividerMedia
            }

            testimonials {
                ...testimonial
            }
        }
    }

    ${FRAGMENT_META}
    ${FRAGMENT_HOMEPAGE_BANNER}
    ${FRAGMENT_HOMEPAGE_HIGHLIGHT}
    ${FRAGMENT_HOMEPAGE_STORY}
    ${FRAGMENT_MEDIA({
        name: 'homepageDivider',
        sizesHandles: ['bannerDesktop', 'mediaDividerTablet', 'mediaDividerMobile'],
    })}
    ${FRAGMENT_TESTIMONIAL}
`;
