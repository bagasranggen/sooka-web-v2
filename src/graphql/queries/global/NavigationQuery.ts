import { gql } from '@apollo/client';

import { FRAGMENT_LINK } from '@/graphql/queries/fragments/FragmentLink';

export const NAVIGATION_QUERY = gql`
    query NavigationQuery {
        entry: Navigation {
            navigations {
                entryStatus

                link {
                    ...navigationLink
                }
            }
        }
    }

    ${FRAGMENT_LINK({ name: 'navigationLink', handle: 'Navigation_Navigations_Link' })}
`;
