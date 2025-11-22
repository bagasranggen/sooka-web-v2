import React from 'react';

import Base from '@/components/common/Marquee';
import { default as BasePicture, BaseProps } from '@/components/common/Picture';

export type PictureProps = {
    items: BaseProps['items'][];
};

const Picture = ({ items }: PictureProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <Base itemClassName="flex flex-nowrap *:ms-2">
            {items.map((item: BaseProps['items'], i: number) => (
                <BasePicture
                    key={i}
                    items={item}
                />
            ))}
        </Base>
    );
};

export default Picture;
