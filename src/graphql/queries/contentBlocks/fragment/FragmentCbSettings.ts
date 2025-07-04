import { gql } from '@apollo/client';

import { CONTENT_BLOCK_INTERFACE } from '@/components/common/ContentBlocks/handles';

export const FRAGMENT_CONTENT_BLOCK_SETTINGS = Object.assign(
    {},
    ...Object.values(CONTENT_BLOCK_INTERFACE).map((item) => {
        return {
            [item]: gql`
                ${`
                    fragment cbSetting${item} on ${item} {
                        marginTop
                        marginBottom
                    }
                `}
            `,
        };
    })
);
