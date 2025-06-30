import { gql } from '@apollo/client';

export const FRAGMENT_MEDIA = gql`
    fragment media on Media {
        url
        width
        height
        filename
        alt
    }
`;
