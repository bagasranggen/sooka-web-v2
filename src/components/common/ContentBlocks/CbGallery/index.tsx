import React from 'react';

import Columns from '@/components/common/Columns';
import ImageCollage, { ImageCollageProps } from '@/components/common/ImageCollage';
import CbWrapper, { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';
import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';

export type CbGalleryProps = Pick<CbWrapperProps, 'className'> &
    Pick<CbContainerProps, 'isNested'> &
    Pick<ImageCollageProps, 'items'>;

const CbGallery = ({ className, isNested, items }: CbGalleryProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <CbWrapper className={className}>
            <CbContainer isNested={isNested}>
                <Columns.Row className="justify-center">
                    <Columns.Column width={{ md: 10 }}>
                        <ImageCollage items={items} />
                    </Columns.Column>
                </Columns.Row>
            </CbContainer>
        </CbWrapper>
    );
};

export default CbGallery;
