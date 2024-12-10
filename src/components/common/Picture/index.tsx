import React, { forwardRef } from 'react';
import { ImageProps } from 'next/image';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseItemProps = {
    media?: number;
    srcRetina?: string;
    type?: string;
} & ImageProps;

const BaseItemSource = (item: BaseItemProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { media, className, src, srcRetina, alt, ...restImage } = item;

    let srcSet = src;
    if (srcRetina) srcSet += ` 1x, ${srcRetina} 2x`;

    const props = {
        srcSet,
        ...restImage,
        ...(media ? { media: `(min-width: ${media}px)` } : {}),
    };

    return <source {...(props as any)} />;
};

const BaseItemImg = (item: BaseItemProps) => {
    const { className, srcRetina, ...rest } = item;

    let imageClass: ArrayString = [];
    if (className) imageClass.push(className);
    imageClass = joinArrayString(imageClass);

    const props: any = {
        ...rest,
        ...(srcRetina ? { srcSet: `${srcRetina} 2x` } : {}),
        className: imageClass,
    };

    return (
        /* eslint-disable @next/next/no-img-element */
        /* eslint-disable jsx-a11y/alt-text */
        <img
            {...(props as any)}
            suppressHydrationWarning={true}
        />
        /* eslint-disable @next/next/no-img-element */
        /* eslint-disable jsx-a11y/alt-text */
    );
};

export type BaseProps = {
    className?: string;
    style?: React.CSSProperties;
    events?: React.DOMAttributes<HTMLPictureElement>;
    items: BaseItemProps[];
};

const Base = forwardRef<HTMLPictureElement, BaseProps>(({ className, items, style, events, ...props }, ref) => {
    let pictureClass: ArrayString = [];
    // if (style) pictureClass.push('d-block');
    if (className) pictureClass.push(className);
    pictureClass = joinArrayString(pictureClass);

    let pictureProps = props;
    if (style) pictureProps = { ...pictureProps, style: style };
    if (events) pictureProps = { ...pictureProps, ...events };

    return (
        <picture
            ref={ref}
            {...(pictureClass ? { className: pictureClass } : {})}
            {...pictureProps}>
            {items.map((item, i) => {
                const Image = items.length - 1 === i ? BaseItemImg : BaseItemSource;
                const { alt, title, ...restItem } = item as any;

                let props = { ...restItem, alt };
                if (!alt && title) props = { ...props, alt: title };

                return (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <Image
                        key={i}
                        {...props}
                    />
                );
            })}
        </picture>
    );
});

Base.displayName = 'Base';
export default Base;
