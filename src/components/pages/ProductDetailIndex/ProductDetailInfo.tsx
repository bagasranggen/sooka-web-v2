import React from 'react';

import Heading, { BaseProps } from '@/components/common/Heading';
import List, { ThumbnailProps } from '@/components/common/List';
import RichText, { RichTextProps } from '@/components/common/RichText';

export type ProductDetailInfoProps = {
    title: BaseProps['children'];
    description?: RichTextProps['children'];
    addOns?: ThumbnailProps['items'];
};

const ProductDetailInfo = ({ title, description, addOns }: ProductDetailInfoProps): React.ReactElement => {
    return (
        <div className="first:mt-2 mt-6">
            <Heading className="text-[2.5rem] md:text-[3rem] lg:text-[5rem]">{title}</Heading>

            {description && <RichText className="mt-1">{description}</RichText>}

            {addOns && addOns.length > 0 && (
                <div className="mt-2">
                    <List.Thumbnail items={addOns} />
                </div>
            )}
        </div>
    );
};

export default ProductDetailInfo;
