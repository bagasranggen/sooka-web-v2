import React, { PropsWithChildren } from 'react';

import { ArrayString, CreateArrayWithLengthX, NumericRange, ClassnameProps, ResponsiveProps } from '@/libs/@types';
import { getColumnWidth, joinArrayString } from '@/libs/utils';

export type ColumnWidthProps = NumericRange<CreateArrayWithLengthX<0>, 12> | 'auto';

export type ColumnProps = {
    width?: ColumnWidthProps | Partial<Record<ResponsiveProps, ColumnWidthProps>>;
    offset?: ColumnWidthProps | Partial<Record<ResponsiveProps, ColumnWidthProps>>;
} & (PropsWithChildren & ClassnameProps);

const Column = ({ children, className, width = 12, offset }: ColumnProps): React.ReactElement => {
    let columnClass: ArrayString = [];
    columnClass.push(...getColumnWidth({ width }));
    columnClass.push(...getColumnWidth({ width: offset, className: 'ms' }));
    if (className) columnClass.push(className);
    columnClass = joinArrayString(columnClass);

    return <div className={columnClass}>{children}</div>;
};

export default Column;
