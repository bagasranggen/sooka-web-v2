import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps as CardBaseProps } from '@/components/common/Card/Base';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Picture, { BaseProps } from '@/components/common/Picture';

export type ThumbnailItemProps = {
    cta: Omit<BaseAnchorProps, 'as'>;
    media: BaseProps['items'];
    mediaHover: BaseProps['items'];
    title: string;
    price?: string;
    salePrice?: string;
};

export type ThumbnailProps = {
    items: ThumbnailItemProps[];
} & Omit<CardBaseProps, 'items'>;

const Thumbnail = ({ items, width = 3, ...props }: ThumbnailProps): React.ReactElement => {
    return (
        <Base
            {...props}
            width={width}
            items={items.map(({ cta, media, mediaHover, title, price, salePrice }: ThumbnailItemProps) => {
                const hasPrice = !!price;

                let titleClass: ArrayString = ['mt-1 md:transition-colors md:group-hover:text-sooka-primary'];
                if (hasPrice) titleClass.push('text-[1.4rem]');
                if (!hasPrice) titleClass.push('uppercase font-semibold tracking-0.2');
                titleClass = joinArrayString(titleClass);

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
                                <Picture items={media} />

                                <Picture
                                    className="absolute top-0 opacity-0 md:transition-opacity md:group-hover:opacity-100"
                                    items={mediaHover}
                                />
                            </div>
                            <h3 className={titleClass}>{title}</h3>
                            {priceBlock}
                            {regularPriceBlock}
                        </Button>
                    ),
                };
            })}
        />
    );
};

export default Thumbnail;
