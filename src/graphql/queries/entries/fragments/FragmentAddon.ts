import { gql } from '@apollo/client';

import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_ADDON = gql`
    fragment addon on Addon {
        title
        slug

        thumbnail {
            ...addonThumbnailMedia
        }

        prices {
            price
            salePrice
            note
        }
    }

    ${FRAGMENT_MEDIA({ name: 'addonThumbnail', sizesHandles: ['productAddon'] })}
`;
