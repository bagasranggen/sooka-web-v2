import React from 'react';

import Picture, { BaseProps } from '@/components/common/Picture';
import Columns from '@/components/common/Columns';
import ImageCollageCarousel from '@/components/common/ImageCollage/ImageCollageCarousel';

export type ImageCollageItemProps = BaseProps['items'];

export type ImageCollageProps = {
    items: ImageCollageItemProps[];
};

const ImageCollage = ({ items }: ImageCollageProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    const COLLAGE_SPACE: Record<number, string> = {
        0: 'md:mt-8',
        1: '',
        2: 'md:mt-16',
    };

    const collage: ImageCollageProps['items'][] = [[], [], []];

    items.forEach((item: ImageCollageItemProps, i: number) => {
        const order = i % 3;

        collage[order].push(item);
    });

    return (
        <>
            <Columns
                className="hidden md:flex"
                gutter={2}>
                {collage.map((item: ImageCollageProps['items'], i: number) => {
                    const order = i % 3;

                    return (
                        <Columns.Column
                            key={i}
                            className={COLLAGE_SPACE[order]}
                            md={4}>
                            {item.map((itm: ImageCollageItemProps, idx: number) => {
                                return (
                                    <Picture
                                        key={idx}
                                        className="block not-first:mt-2"
                                        items={itm}
                                    />
                                );
                            })}
                        </Columns.Column>
                    );
                })}
            </Columns>

            <ImageCollageCarousel
                className="md:hidden!"
                items={items}
            />
        </>
    );
};

export default ImageCollage;
