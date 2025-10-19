import { gql } from '@apollo/client';

import { FRAGMENT_LINK } from '@/graphql/queries/fragments/FragmentLink';
import { FRAGMENT_SOCIAL_MEDIA } from '@/graphql/queries/global/fragments/FragmentSocialMedia';

export const LAYOUT_QUERY = gql`
    query LayoutQuery {
        headerNavigation: Navigation {
            navigations {
                entryStatus

                link {
                    ...link
                }
            }
        }

        footerNavigation: Footer {
            # address
            businessHours

            socialMedia {
                ...socialMedia
            }
        }
    }

    ${FRAGMENT_LINK}
    ${FRAGMENT_SOCIAL_MEDIA}
`;
