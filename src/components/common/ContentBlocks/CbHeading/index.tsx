import React from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseProps } from '@/components/common/Heading';
import CbWrapper, { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';
import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';

export type CbHeadingProps = {
    title: BaseProps['children'];
} & (Pick<CbWrapperProps, 'className'> & Pick<CbContainerProps, 'isNested'>);

const CbHeading = ({ title, className, isNested }: CbHeadingProps): React.ReactElement => {
    return (
        <CbWrapper className={className}>
            <CbContainer isNested={isNested}>
                <Columns.Row className="justify-center">
                    <Columns.Column width={{ md: 8 }}>
                        <Heading
                            as="h1"
                            size="heading"
                            className="text-center">
                            {/*Custom <span className="text-sooka-primary">Cakes</span>*/}
                            {title}
                        </Heading>
                    </Columns.Column>
                </Columns.Row>
            </CbContainer>
        </CbWrapper>
    );
};

export default CbHeading;
