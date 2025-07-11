import { gql } from '@apollo/client';

export const FRAGMENT_TAG = gql`
    fragment tag on Tag {
        title
        slug
    }
`;
