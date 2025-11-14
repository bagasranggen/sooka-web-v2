import React from 'react';

import CbWrapper, { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';
import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';
import Columns, { ColumnProps } from '@/components/common/Columns';
import CbDualPanelContent, {
    CbDualPanelContentProps,
} from '@/components/common/ContentBlocks/CbDualPanel/CbDualPanelContent';

export type CbDualPanelItemProps = {
    columnClassName: ColumnProps['className'];
} & (Pick<ColumnProps, 'width'> & CbDualPanelContentProps);

export type CbDualPanelProps = {
    items: CbDualPanelItemProps[];
} & (Pick<CbWrapperProps, 'className'> & Pick<CbContainerProps, 'isNested'>);

const CbDualPanel = ({ className, isNested, items }: CbDualPanelProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <CbWrapper className={className}>
            <CbContainer isNested={isNested}>
                <Columns.Row
                    className="items-center"
                    spacing={{ x: 3, y: 2 }}>
                    {items.map(({ width, type, columnClassName, ...item }, i) => {
                        return (
                            <Columns.Column
                                key={i}
                                width={width}
                                className={columnClassName}>
                                <CbDualPanelContent
                                    type={type}
                                    {...item}
                                />
                            </Columns.Column>
                        );
                    })}
                </Columns.Row>
            </CbContainer>
        </CbWrapper>
    );
};

export default CbDualPanel;
