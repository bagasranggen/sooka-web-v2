import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps as CardBaseProps } from '@/components/common/Card/Base';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Picture, { BaseProps } from '@/components/common/Picture';

export type ThumbnailLabelWithPositionProps = {
    children: string;
    position?: 'center' | 'top-right';
};

export type ThumbnailItemProps = {
    cta: Omit<BaseAnchorProps, 'as'>;
    media: BaseProps['items'];
    mediaHover: BaseProps['items'];
    title: string;
    price?: string;
    salePrice?: string;
    disabled?: boolean;
    label?: string | ThumbnailLabelWithPositionProps;
};

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
        <Base
            {...props}
            row={row}
            column={column}
            items={items.map(
                ({ cta, media, mediaHover, title, price, salePrice, label, disabled }: ThumbnailItemProps) => {
                    const hasPrice = !!price;

                    let titleClass: ArrayStringProps = ['mt-1 md:transition-colors md:group-hover:text-sooka-primary'];
                    if (hasPrice) titleClass.push('text-[1.4rem]');
                    if (!hasPrice) titleClass.push('uppercase font-semibold tracking-0.2');
                    titleClass = joinArrayString(titleClass);

                    let labelClass: ArrayStringProps = [];
                    labelClass.push('absolute z-50');
                    if (
                        (label && typeof label === 'string') ||
                        (typeof label === 'object' && label.position !== 'top-right')
                    ) {
                        labelClass.push('top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2');
                    }
                    if (label && typeof label === 'object' && label.position === 'top-right') {
                        labelClass.push('top-1 right-1');
                    }
                    labelClass.push('bg-sooka-primary saturate-[.75] text-white text-center');
                    labelClass.push('px-1 py-1');
                    labelClass.push('uppercase text-sm font-bold tracking-0.2');
                    labelClass.push('flex justify-center items-center');
                    labelClass = joinArrayString(labelClass);

                    let labelText: undefined | string = undefined;
                    if (label && typeof label === 'string') labelText = label;
                    if (label && typeof label === 'object' && label?.children) labelText = label.children;

                    let mainMediaClass: ArrayStringProps = [];
                    if (disabled) mainMediaClass.push('contrast-50');
                    mainMediaClass = joinArrayString(mainMediaClass);

                    let hoverMediaClass: ArrayStringProps = ['absolute top-0 opacity-0 md:transition-opacity w-full'];
                    hoverMediaClass.push('md:group-hover:opacity-100');
                    if (disabled) hoverMediaClass.push('contrast-50');
                    hoverMediaClass = joinArrayString(hoverMediaClass);

                    let priceBlock = undefined;
                    if (hasPrice) {
                        priceBlock = (
                            <div className="flex align-baseline mt-1 gap-x-[.2rem]">
                                <span className="text-sm">RP</span>
                                <span className="text-[3rem] leading-[2.5rem] font-semibold">{salePrice ?? price}</span>
                            </div>
                        );
                    }

                    let regularPriceBlock = undefined;
                    if (salePrice && price) {
                        regularPriceBlock = (
                            <p className="mt-1 text-[1.4rem] tracking-0.1 uppercase font-semibold opacity-60">
                                <s>RP{price}</s>
                            </p>
                        );
                    }

                    return {
                        children: (
                            <Button
                                as="anchor"
                                className="group"
                                {...cta}>
                                <div className="relative">
                                    {labelText && <div className={labelClass}>{labelText}</div>}

                                    <Picture
                                        className={mainMediaClass}
                                        items={media}
                                    />

                                    <Picture
                                        className={hoverMediaClass}
                                        items={mediaHover}
                                    />
                                </div>
                                <h3 className={titleClass}>{title}</h3>
                                {priceBlock}
                                {regularPriceBlock}
                            </Button>
                        ),
                    };
                }
            )}
        />
    );
};

export default Thumbnail;
