import { gql } from '@apollo/client';

export const FRAGMENT_LINK = ({ name, handle }: { name: string; handle: string }) => gql`
    ${`
        fragment ${name} on ${handle} {
            source
            target
            label
            custom

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
    `}
`;
