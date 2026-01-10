import { gql } from '@apollo/client';

export const FRAGMENT_LINK = gql`
    fragment link on Link {
        source
        target
        label
        custom
        mail
        whatsappNumber
        whatsappMessage

        product {
            url
            title
        }

        category {
            url
            title
        }

        page {
            url
            title
        }
    }
`;
