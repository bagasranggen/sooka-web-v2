import { gql } from '@apollo/client';

import { FRAGMENT_PRICE } from '@/graphql/queries/entries/fragments/FragmentPrice';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_ADDON = gql`
    fragment addon on Addon {
        title
        slug

        thumbnail {
            ...addonThumbnailMedia
        }

        prices {
            price {
                ...price
            }
        }
    }

    ${FRAGMENT_PRICE}
    ${FRAGMENT_MEDIA({
        name: 'addonThumbnail',
        on: 'MediaAddon',
        sizesHandles: ['assets400x400'],
    })}
`;
