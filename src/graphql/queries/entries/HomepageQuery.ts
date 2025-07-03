import { gql } from '@apollo/client';

import { FRAGMENT_HOMEPAGE_BANNER } from '@/graphql/queries/entries/fragments/FragmentHomepageBanner';
import { FRAGMENT_HOMEPAGE_STORY } from '@/graphql/queries/entries/fragments/FragmentHomepageStory';

export const HOMEPAGE_QUERY = gql`
    query HomepageQuery {
        entry: Homepage {
            bannerMedia {
                ...homepageBanner
            }

            ...homepageStory
        }
    }

    ${FRAGMENT_HOMEPAGE_BANNER}
    ${FRAGMENT_HOMEPAGE_STORY}
`;
