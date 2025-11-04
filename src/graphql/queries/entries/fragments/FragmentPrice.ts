import { gql } from '@apollo/client';

export const FRAGMENT_PRICE = gql`
    fragment price on Price {
        normalPrice
        salePrice
        note
        isFree
    }
`;
