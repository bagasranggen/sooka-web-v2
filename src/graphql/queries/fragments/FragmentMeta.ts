import { gql } from '@apollo/client';

export const FRAGMENT_META = gql`
    fragment meta on Meta {
        title
        description
    }
`;
