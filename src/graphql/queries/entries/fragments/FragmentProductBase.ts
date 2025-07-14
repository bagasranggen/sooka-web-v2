import { gql } from '@apollo/client';

export const FRAGMENT_PRODUCT_BASE = gql`
    fragment productBase on Product {
        title
        slug
        url
        uri
        description
        bannerTitle
    }
`;
