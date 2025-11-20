import React, { PropsWithChildren } from 'react';

import { PropsClassname } from '@/libs/@types';

import Columns, { RowProps, ColumnProps } from '@/components/common/Columns';

export type BaseItemProps = PropsWithChildren & PropsClassname;

export type BaseProps = {
    items: BaseItemProps[];
} & (PropsClassname & Pick<RowProps, 'spacing' | 'columns' | 'isWrap'> & Pick<ColumnProps, 'width' | 'offset'>);

const Base = ({ items, spacing, columns, isWrap, width, offset, className }: BaseProps): React.ReactElement => {
    if (!items) return <></>;
    if (items.length === 0) return <></>;

    return (
        <Columns.Row
            spacing={spacing}
            columns={columns}
            isWrap={isWrap}
            className={className}>
            {items.map((item: BaseItemProps, i: number) => {
                return (
                    <Columns.Column
                        key={i}
                        width={width}
                        offset={offset}
                        className={item.className}>
                        {item.children}
                    </Columns.Column>
                );
            })}
        </Columns.Row>
    );
};

export default Base;
