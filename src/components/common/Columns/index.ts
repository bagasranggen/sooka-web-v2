import { Component } from '@/libs/@types';

import Row, { RowProps } from '@/components/common/Columns/Row';
import Column, { ColumnProps } from '@/components/common/Columns/Column';

export type * from '@/components/common/Columns/Row';
export type * from '@/components/common/Columns/Column';

type ColumnsComposition = {
    Row: Component<RowProps>;
    Column: Component<ColumnProps>;
};

export default Object.assign<{}, ColumnsComposition>({}, { Row, Column });
