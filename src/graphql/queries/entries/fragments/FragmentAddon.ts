import { gql } from '@apollo/client';

export const FRAGMENT_ADDON = gql`
    fragment addon on Addon {
        title
        slug

        thumbnail {
            src: url
            width
            height
            filename
            alt

            sizes {
                productAddon {
                    src: url
                    width
                    height
                }
            }
        }

        prices {
            price
            salePrice
            note
        }
    }
`;
