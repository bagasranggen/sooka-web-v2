import { CONTENT_BLOCK_TYPE } from './handles';

import { CbRelatedProductsData } from './CbRelatedProducts/data';

export const CONTENT_BLOCKS_DATA_HANDLES = {
    // [CONTENT_BLOCK_TYPE.HEADING]: CbHeading,
    [CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]: CbRelatedProductsData,
} as const;
