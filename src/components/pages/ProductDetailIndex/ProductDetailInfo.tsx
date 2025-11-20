import React from 'react';

import Heading, { BaseProps } from '@/components/common/Heading';
import List, { ThumbnailProps } from '@/components/common/List';
import RichText, { RichTextProps } from '@/components/common/RichText';
import Range, { RangeProps } from '@/components/common/Range';
import Animation from '@/components/Animation';

export type ProductDetailInfoProps = {
    title: BaseProps['children'];
    description?: RichTextProps['children'];
    addOns?: ThumbnailProps['items'];
    flavours?: RangeProps[];
};

const ProductDetailInfo = ({ title, description, addOns, flavours }: ProductDetailInfoProps): React.ReactElement => {
    return (
        <Animation type="fade-in">
            <div className="first:mt-6 md:first:mt-2 mt-6">
                <Heading className="text-[3.5rem] lg:text-[3.7rem]">{title}</Heading>

                {description && <RichText className="mt-1">{description}</RichText>}

                {addOns && addOns.length > 0 && (
                    <div className="mt-2">
                        <List.Thumbnail items={addOns} />
                    </div>
                )}

                {flavours && flavours.length > 0 && (
                    <>
                        {flavours.map((item: RangeProps, i: number) => {
                            return (
                                <Range
                                    key={i}
                                    className={i === 0 ? 'mt-2' : 'mt-1'}
                                    start={item.start}
                                    end={item.end}
                                    value={item.value}
                                />
                            );
                        })}
                    </>
                )}
            </div>
        </Animation>
    );
};

export default ProductDetailInfo;
