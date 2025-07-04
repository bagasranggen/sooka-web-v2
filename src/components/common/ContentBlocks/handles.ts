export const CONTENT_BLOCK_TYPE = {
    HEADING: 'heading',
} as const;

export const CONTENT_BLOCK_INTERFACE = {
    [CONTENT_BLOCK_TYPE.HEADING]: 'ContentBlockHeading',
} as const;
