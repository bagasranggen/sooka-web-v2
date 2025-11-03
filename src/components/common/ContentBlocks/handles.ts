export const CONTENT_BLOCK_TYPE = {
    CALLOUT: 'callout',
    DUAL_PANEL: 'dualPanel',
    GALLERY: 'gallery',
    HEADING: 'heading',
    MARQUEE: 'marquee',
    RELATED_PRODUCTS: 'relatedProducts',
} as const;

export const CONTENT_BLOCK_INTERFACE = {
    [CONTENT_BLOCK_TYPE.CALLOUT]: 'ContentBlockCallout',
    [CONTENT_BLOCK_TYPE.DUAL_PANEL]: 'ContentBlockDualPanel',
    [CONTENT_BLOCK_TYPE.GALLERY]: 'ContentBlockGallery',
    [CONTENT_BLOCK_TYPE.HEADING]: 'ContentBlockHeading',
    [CONTENT_BLOCK_TYPE.MARQUEE]: 'ContentBlockMarquee',
    [CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]: 'ContentBlockRelatedProducts',
} as const;
