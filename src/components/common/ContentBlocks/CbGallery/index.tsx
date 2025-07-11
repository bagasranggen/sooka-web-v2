import React from 'react';

import { IMAGE_COLLAGE } from '@/libs/mock';

import Columns from '@/components/common/Columns';
import ImageCollage from '@/components/common/ImageCollage';
import CbWrapper, { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';
import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';

export type CbGalleryProps = {} & (Pick<CbWrapperProps, 'className'> & Pick<CbContainerProps, 'isNested'>);

const CbGallery = ({ className, isNested }: CbGalleryProps): React.ReactElement => {
    return (
        <CbWrapper className={className}>
            <CbContainer isNested={isNested}>
                <Columns.Row className="justify-center">
                    <Columns.Column width={{ md: 10 }}>
                        <ImageCollage items={IMAGE_COLLAGE} />
                    </Columns.Column>
                </Columns.Row>
            </CbContainer>
        </CbWrapper>
    );
};

export default CbGallery;
