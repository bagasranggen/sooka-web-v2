import React from 'react';

import { BreakpointsProps } from '@/libs/@types';

import CbWrapper, { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';
import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';
import Columns, { ColumnProps } from '@/components/common/Columns';
import CbDualPanelContent, {
    CbDualPanelContentProps,
} from '@/components/common/ContentBlocks/CbDualPanel/CbDualPanelContent';

export type CbDualPanelItemProps = {
    columnClassName: ColumnProps['className'];
    column?: Pick<ColumnProps, BreakpointsProps>;
} & CbDualPanelContentProps;

export type CbDualPanelProps = {
    items: CbDualPanelItemProps[];
} & (Pick<CbWrapperProps, 'className'> & Pick<CbContainerProps, 'isNested'>);

const CbDualPanel = ({ className, isNested, items }: CbDualPanelProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <CbWrapper className={className}>
            <CbContainer isNested={isNested}>
                <Columns
                    className="items-center"
                    gutterY={2}>
                    {items.map(({ type, columnClassName, column, ...item }, i) => {
                        return (
                            <Columns.Column
                                key={i}
                                className={columnClassName}
                                {...column}>
                                <CbDualPanelContent
                                    type={type}
                                    {...item}
                                />
                            </Columns.Column>
                        );
                    })}
                </Columns>
            </CbContainer>
        </CbWrapper>
    );
};

export default CbDualPanel;
