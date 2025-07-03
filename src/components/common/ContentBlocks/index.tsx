import React from 'react';
import { createDynamicElement } from '@/libs/factory';
import { CONTENT_BLOCK_HANDLES } from '@/components/common/ContentBlocks/handlesIndex';

export type ContentBlocksItemProps = {
    blockType: string;
};

export type ContentBlocksProps = {
    items: ContentBlocksItemProps[];
};

const ContentBlocks = ({ items }: ContentBlocksProps): React.ReactElement | null => {
    if (items.length === 0) return null;

    return (
        <>
            {items.map(({ blockType, ...props }) => {
                return createDynamicElement({ handles: CONTENT_BLOCK_HANDLES, selector: blockType, props });
            })}
        </>
    );
};

export default ContentBlocks;
