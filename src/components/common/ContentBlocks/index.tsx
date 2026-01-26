import React, { Fragment } from 'react';

import { ClassnameProps } from '@/libs/@types';
import { createDynamicElement } from '@/libs/factory';

import { CONTENT_BLOCK_HANDLES } from '@/components/common/ContentBlocks/handlesIndex';
import { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';

export type ContentBlocksItemProps = {
    blockType: string;
    marginTop?: string;
    marginBottom?: string;
} & ClassnameProps;

export type ContentBlocksProps = {
    items: ContentBlocksItemProps[];
} & Pick<CbContainerProps, 'isNested'>;

const ContentBlocks = ({ items }: ContentBlocksProps): React.ReactElement | null => {
    if (items.length === 0) return null;

    return (
        <>
            {items.map(({ blockType, ...props }, i) => {
                return (
                    <Fragment key={i}>
                        {createDynamicElement({ handles: CONTENT_BLOCK_HANDLES, selector: blockType, props })}
                    </Fragment>
                );
            })}
        </>
    );
};

export default ContentBlocks;
