import { CONTENT_BLOCK_TYPE } from './handles';

import { CbRelatedProductsData } from './CbRelatedProducts/data';
import { CbCalloutData } from './CbCallout/data';

export const CONTENT_BLOCKS_DATA_HANDLES = {
    [CONTENT_BLOCK_TYPE.CALLOUT]: CbCalloutData,
    [CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]: CbRelatedProductsData,
} as const;
