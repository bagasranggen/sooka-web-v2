import { gql } from '@apollo/client';

import { CONTENT_BLOCK_INTERFACE } from '@/components/common/ContentBlocks/handles';

export const FRAGMENT_CB_COMMON = Object.assign(
    {},
    ...Object.values(CONTENT_BLOCK_INTERFACE).map((item) => {
        return {
            [item]: gql`
                ${`
                    fragment cbCommon${item} on ${item} {
                        blockType
                    }
                `}
            `,
        };
    })
);
