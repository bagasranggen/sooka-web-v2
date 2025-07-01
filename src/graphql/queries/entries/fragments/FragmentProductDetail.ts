import { gql } from '@apollo/client';
import { FRAGMENT_ADDON } from '@/graphql/queries/entries/fragments/FragmentAddon';

export const FRAGMENT_PRODUCT_DETAIL = gql`
    fragment productDetail on Product {
        addons {
            ...addon
        }
    }

    ${FRAGMENT_ADDON}
`;
