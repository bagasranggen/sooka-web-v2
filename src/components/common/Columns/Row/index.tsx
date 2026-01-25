import React, { PropsWithChildren } from 'react';

import {
    ArrayString,
    CreateArrayWithLengthX,
    NumericRange,
    Prettify,
    PropsClassname,
    ResponsiveProps,
} from '@/libs/@types';
import { getColumnWidth, getRowSpacing, joinArrayString } from '@/libs/utils';

export type RowSpacingProps = Partial<Record<'x' | 'y', NumericRange<CreateArrayWithLengthX<0>, 8>>>;

export type RowColumnsProps = NumericRange<CreateArrayWithLengthX<0>, 6>;

export type RowProps = {
    columns?: RowColumnsProps | Prettify<Partial<Record<ResponsiveProps, RowColumnsProps>>>;
    spacing?: Prettify<RowSpacingProps> | Prettify<Partial<Record<ResponsiveProps, RowSpacingProps>>>;
    isWrap?: boolean;
} & (PropsWithChildren & PropsClassname);

const Row = ({ className, children, spacing = { x: 3 }, columns, isWrap = true }: RowProps): React.ReactElement => {
    let rowClass: ArrayString = ['flex *:grow *:shrink-0 *:basis-[0%] *:max-w-full *:w-full'];
    if (isWrap) rowClass.push('flex-wrap');
    rowClass.push(...getRowSpacing({ obj: spacing }));
    if (columns) rowClass.push(...getColumnWidth({ width: columns, isDirectChildren: true, division: 100 }));
    if (className) rowClass.push(className);
    rowClass = joinArrayString(rowClass);

    return <div className={rowClass}>{children}</div>;
};

export default Row;
