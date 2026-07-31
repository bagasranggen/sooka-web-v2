export const CONTENT_BLOCK_TYPE = {
    CALLOUT: 'callout',
    DUAL_PANEL: 'dualPanel',
    GALLERY: 'gallery',
    HEADING: 'heading',
    MARQUEE: 'marquee',
    RELATED_PRODUCTS: 'relatedProducts',
} as const;

export const CONTENT_BLOCK_INTERFACE = {
    [CONTENT_BLOCK_TYPE.CALLOUT]: 'CbCallout',
    [CONTENT_BLOCK_TYPE.DUAL_PANEL]: 'CbDualPanel',
    [CONTENT_BLOCK_TYPE.GALLERY]: 'CbGallery',
    [CONTENT_BLOCK_TYPE.HEADING]: 'CbHeading',
    [CONTENT_BLOCK_TYPE.MARQUEE]: 'CbMarquee',
    [CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]: 'CbRelatedProducts',
} as const;
