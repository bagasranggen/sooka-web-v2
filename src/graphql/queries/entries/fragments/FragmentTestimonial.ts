import { gql } from '@apollo/client';

export const FRAGMENT_TESTIMONIAL = gql`
    fragment testimonial on Testimonial {
        entryStatus
        title
        author
        testimonial
    }
`;
