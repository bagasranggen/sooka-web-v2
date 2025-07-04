export const CONTENT_BLOCK_TYPE = {
    HEADING: 'heading',
    RELATED_PRODUCTS: 'relatedProducts',
} as const;

export const CONTENT_BLOCK_INTERFACE = {
    [CONTENT_BLOCK_TYPE.HEADING]: 'ContentBlockHeading',
    [CONTENT_BLOCK_TYPE.RELATED_PRODUCTS]: 'ContentBlockRelatedProducts',
} as const;
