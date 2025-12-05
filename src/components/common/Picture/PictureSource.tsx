import React from 'react';
import { getImageProps, ImageProps } from 'next/image';

import { joinArrayString } from '@/libs/utils';

import { BaseItemProps } from '@/components/common/Picture';

export type PictureSourceProps = BaseItemProps;

const PictureSource = ({ media: mediaProps, ...item }: PictureSourceProps): React.ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { media, className, src, srcRetina, alt, ...restImage } = item;

    // let srcSet = src;
    // if (srcRetina) srcSet += ` 1x, ${srcRetina} 2x`;

    let media: string | undefined = undefined;
    if (mediaProps) media = `(min-width: ${mediaProps}px)`;

    let sizesProps: ImageProps['sizes'] = undefined;
    if (media && item?.sizes) sizesProps = joinArrayString([media, item.sizes], ' ');

    const {
        props: { srcSet, width, height, sizes },
    } = getImageProps({
        src: item?.src,
        width: item?.width,
        height: item?.height,
        alt: item?.alt,
        sizes: sizesProps,
    });

    const props: React.SourceHTMLAttributes<HTMLSourceElement> = {
        srcSet,
        width,
        height,
        sizes,
        media,
        // ...restImage,
        // ...(media ? { media: `(min-width: ${media}px)` } : {}),
    };

    return <source {...props} />;
};

export default PictureSource;
