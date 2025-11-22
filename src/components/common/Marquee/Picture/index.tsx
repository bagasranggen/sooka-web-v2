import React from 'react';

import Base, { BaseProps } from '@/components/common/Marquee';
import { default as BasePicture, BaseProps as BasePictureProps } from '@/components/common/Picture';

export type PictureProps = {
    items: BasePictureProps['items'][];
} & Pick<BaseProps, 'config'>;

const Picture = ({ items, config }: PictureProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <Base
            config={config}
            itemClassName="flex flex-nowrap *:ms-2">
            {items.map((item: BasePictureProps['items'], i: number) => (
                <BasePicture
                    key={i}
                    items={item}
                />
            ))}
        </Base>
    );
};

export default Picture;
