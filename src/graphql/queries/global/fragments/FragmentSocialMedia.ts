import { gql } from '@apollo/client';

import { FRAGMENT_LINK } from '@/graphql/queries/fragments/FragmentLink';

export const FRAGMENT_SOCIAL_MEDIA = gql`
    fragment socialMedia on SocialMedia {
        icon {
            source
            reactIcon
        }

        link {
            ...link
        }
    }

    ${FRAGMENT_LINK}
`;
