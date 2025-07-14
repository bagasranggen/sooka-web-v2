import { gql } from '@apollo/client';
import { FRAGMENT_CONTENT_BLOCKS_PAGE } from '@/graphql/queries/contentBlocks/FragmentContentBlocksPage';

export const PAGE_QUERY = gql`
    query PagesQuery($uri: String) {
        entries: Pages(where: { uri: { equals: $uri } }) {
            docs {
                entryStatus

                ...pageContentBlocks
            }
        }
    }

    ${FRAGMENT_CONTENT_BLOCKS_PAGE}
`;
