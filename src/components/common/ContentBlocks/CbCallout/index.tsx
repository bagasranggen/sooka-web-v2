import React from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseProps } from '@/components/common/Heading';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import CbWrapper, { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';
import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';

export type CbCalloutProps = {
    title?: BaseProps['children'];
    cta?: Pick<BaseAnchorProps, 'href' | 'target' | 'children'>;
} & (Pick<CbWrapperProps, 'className'> & Pick<CbContainerProps, 'isNested'>);

const CbCallout = ({ className, isNested, title, cta }: CbCalloutProps): React.ReactElement => {
    console.log({ cta });

    return (
        <CbWrapper className={className}>
            <CbContainer isNested={isNested}>
                <Columns.Row className="justify-center">
                    <Columns.Column width={{ md: 8 }}>
                        <Heading
                            as="h4"
                            size="callout"
                            className="text-center">
                            {title}
                        </Heading>

                        {cta?.href && (
                            <Button.Container
                                className="mt-3 justify-center"
                                items={[
                                    {
                                        children: (
                                            <Button.Arrow
                                                size="lg"
                                                {...cta}
                                            />
                                        ),
                                    },
                                ]}
                            />
                        )}
                    </Columns.Column>
                </Columns.Row>
            </CbContainer>
        </CbWrapper>
    );
};

export default CbCallout;
