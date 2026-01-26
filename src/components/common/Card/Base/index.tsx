import React, { PropsWithChildren } from 'react';

import { BreakpointsProps, ClassnameProps } from '@/libs/@types';

import Columns, { BaseProps as RowProps, ColumnProps } from '@/components/common/Columns';

export type BaseItemProps = PropsWithChildren & ClassnameProps;

export type BaseProps = {
    items: BaseItemProps[];
    column?: Pick<ColumnProps, BreakpointsProps | 'offset'>;
    row?: Pick<RowProps, 'gutter' | 'gutterX' | 'gutterY'>;
} & ClassnameProps;

const Base = ({ items, row, column, className }: BaseProps): React.ReactElement => {
    if (!items) return <></>;
    if (items.length === 0) return <></>;

    return (
        <Columns
            {...row}
            className={className}>
            {items.map((item: BaseItemProps, i: number) => {
                return (
                    <Columns.Column
                        key={i}
                        {...column}
                        className={item.className}>
                        {item.children}
                    </Columns.Column>
                );
            })}
        </Columns>
    );
};

export default Base;
