import React, { ExoticComponent, FragmentProps, PropsWithChildren } from 'react';

import Container from '@/components/common/Container';
import { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';
import { ElementTagsProps } from '@/libs/@types';

export type CbContainerProps = {
    isNested?: boolean;
} & (Pick<CbWrapperProps, 'className'> & PropsWithChildren);

const CbContainer = ({ children, isNested, className }: CbContainerProps): React.ReactElement => {
    if (isNested) {
        let Wrapper: ExoticComponent<FragmentProps> | ElementTagsProps = React.Fragment;
        if (className) Wrapper = 'section';

        let wrapperProps = {};
        if (className) wrapperProps = { className };

        return <Wrapper {...wrapperProps}>{children}</Wrapper>;
    }

    return (
        <Container
            as="section"
            className={className}>
            {children}
        </Container>
    );
};

export default CbContainer;
