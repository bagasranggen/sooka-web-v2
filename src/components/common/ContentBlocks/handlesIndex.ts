import { CONTENT_BLOCK_TYPE } from '@/components/common/ContentBlocks/handles';

import CbCallout from '@/components/common/ContentBlocks/CbCallout';
import CbGallery from '@/components/common/ContentBlocks/CbGallery';
import CbHeading from '@/components/common/ContentBlocks/CbHeading';
import CbMarquee from '@/components/common/ContentBlocks/CbMarquee';
import CbRelatedProducts from '@/components/common/ContentBlocks/CbRelatedProducts';

export const CONTENT_BLOCK_HANDLES = {
    [CONTENT_BLOCK_TYPE.CALLOUT]: CbCallout,
    [CONTENT_BLOCK_TYPE.GALLERY]: CbGallery,
    [CONTENT_BLOCK_TYPE.HEADING]: CbHeading,
    [CONTENT_BLOCK_TYPE.MARQUEE]: CbMarquee,
    [CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]: CbRelatedProducts,
};
