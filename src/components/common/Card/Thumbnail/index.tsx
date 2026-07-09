import React from 'react';

import Base, { BaseProps as CardBaseProps } from '@/components/common/Card/Base';
import ThumbnailItem, { ThumbnailItemProps } from '@/components/common/Card/Thumbnail/ThumbnailItem';

export type ThumbnailProps = {
    items: ThumbnailItemProps[];
} & Omit<CardBaseProps, 'items'>;

const Thumbnail = ({
    items,
    row = { gutterY: 4 },
    column = { xs: 3 },
    ...props
}: ThumbnailProps): React.ReactElement => {
    return (
        <>
            <Base
                {...props}
                row={row}
                column={column}
                items={items.map((item: ThumbnailItemProps) => {
                    return {
                        children: <ThumbnailItem {...item} />,
                    };
                })}
            />
        </>
    );
};

export default Thumbnail;
