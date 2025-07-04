import { CONTENT_BLOCK_TYPE } from '@/components/common/ContentBlocks/handles';

import CbHeading from '@/components/common/ContentBlocks/CbHeading';
import CbRelatedProducts from '@/components/common/ContentBlocks/CbRelatedProducts';

export const CONTENT_BLOCK_HANDLES = {
    [CONTENT_BLOCK_TYPE.HEADING]: CbHeading,
    [CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]: CbRelatedProducts,
};
