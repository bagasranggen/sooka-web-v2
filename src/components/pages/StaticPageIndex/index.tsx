import React from 'react';

import ContentBlocks, { ContentBlocksProps } from '@/components/common/ContentBlocks';

export type StaticPageIndexProps = {
    entries: {
        contentBlocks: ContentBlocksProps['items'];
    };
};

const StaticPageIndex = ({ entries }: StaticPageIndexProps): React.ReactElement => {
    return <ContentBlocks items={entries?.contentBlocks} />;
};

export default StaticPageIndex;
