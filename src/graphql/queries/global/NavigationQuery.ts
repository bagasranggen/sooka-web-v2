import { gql } from '@apollo/client';

import { FRAGMENT_LINK } from '@/graphql/queries/fragments/FragmentLink';

export const NAVIGATION_QUERY = gql`
    query NavigationQuery {
        entry: Navigation {
            navigations {
                entryStatus

                link {
                    ...link
                }
            }
        }
    }

    ${FRAGMENT_LINK}
`;
