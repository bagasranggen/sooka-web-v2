import React, { PropsWithChildren } from 'react';

import Container from '@/components/common/Container';
import { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';

export type CbContainerProps = {
    isNested?: boolean;
} & (Pick<CbWrapperProps, 'className'> & PropsWithChildren);

const CbContainer = ({ children, isNested, className }: CbContainerProps): React.ReactElement => {
    if (isNested) return <>{children}</>;

    return (
        <Container
            as="section"
            className={className}>
            {children}
        </Container>
    );
};

export default CbContainer;
