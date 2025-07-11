import React from 'react';
import ContentBlocks, { ContentBlocksProps } from '@/components/common/ContentBlocks';

export type CustomPageIndexProps = {
    entries: {
        contentBlocks: ContentBlocksProps['items'];
    };
};

const CustomPageIndex = ({ entries }: CustomPageIndexProps): React.ReactElement => {
    return <ContentBlocks items={entries.contentBlocks} />;
};

export default CustomPageIndex;
