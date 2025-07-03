import { gql } from '@apollo/client';

export const FRAGMENT_CONTENT_BLOCK_HEADING = gql`
    fragment cbHeading on ContentBlockHeading {
        title
    }
`;
