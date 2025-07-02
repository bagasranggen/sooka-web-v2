import { gql } from '@apollo/client';

import { FRAGMENT_HOMEPAGE_BANNER } from '@/graphql/queries/entries/fragments/FragmentHomepageBanner';

export const HOMEPAGE_QUERY = gql`
    query HomepageQuery {
        entry: Homepage {
            bannerMedia {
                ...banner
            }
        }
    }

    ${FRAGMENT_HOMEPAGE_BANNER}
`;
