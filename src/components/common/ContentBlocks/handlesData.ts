import { CONTENT_BLOCK_TYPE } from './handles';

import { CbCalloutData } from './CbCallout/data';
import { CbGalleryData } from './CbGallery/data';
import { CbRelatedProductsData } from './CbRelatedProducts/data';

export const CONTENT_BLOCKS_DATA_HANDLES = {
    [CONTENT_BLOCK_TYPE.CALLOUT]: CbCalloutData,
    [CONTENT_BLOCK_TYPE.GALLERY]: CbGalleryData,
    [CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]: CbRelatedProductsData,
} as const;
