import React from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseProps } from '@/components/common/Heading';
import Card, { ThumbnailProps } from '@/components/common/Card';
import CbWrapper, { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';
import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';

export type CbRelatedProductsProps = {
    title: BaseProps['children'];
    products: ThumbnailProps['items'];
} & (Pick<CbWrapperProps, 'className'> & Pick<CbContainerProps, 'isNested'>);

const CbRelatedProducts = ({ title, className, isNested, products }: CbRelatedProductsProps): React.ReactElement => {
    return (
        <CbWrapper className={className}>
            <CbContainer isNested={isNested}>
                <Columns.Row>
                    <Columns.Column
                        offset={{ md: 1 }}
                        width={{ md: 7 }}>
                        <Heading
                            as="h2"
                            size="section">
                            {title}
                        </Heading>
                    </Columns.Column>
                </Columns.Row>

                {products && products.length > 0 && (
                    <div className="mt-5">
                        <Card.Thumbnail
                            spacing={{ x: 2, y: 4 }}
                            columns={{ xs: 1, sm: 2, md: 5 }}
                            items={products}
                        />
                    </div>
                )}
            </CbContainer>
        </CbWrapper>
    );
};

export default CbRelatedProducts;
