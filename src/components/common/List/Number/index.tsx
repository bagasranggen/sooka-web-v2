import React from 'react';

import Base, { BaseProps } from '@/components/common/List/Base';
import Columns, { ColumnProps } from '@/components/common/Columns';
import Heading, { NumberProps as HeadingNumberProps } from '@/components/common/Heading';
import RichText, { RichTextProps } from '@/components/common/RichText';

export type NumberItemProps = {
    title: HeadingNumberProps['children'];
    description: RichTextProps['children'];
};

export type NumberProps = {
    items: NumberItemProps[];
} & Pick<BaseProps, 'className'>;

const Number = ({ items, ...props }: NumberProps): React.ReactElement => {
    const ORDER: Record<number, ColumnProps['offset']> = {
        0: {},
        1: { md: 4 },
        2: { md: 2 },
    };

    return (
        <Base
            {...props}
            items={items.map((item: NumberItemProps, i: number) => {
                const order = i % 3;

                return {
                    className: 'mt-4 md:not-first:mt-8',
                    children: (
                        <Columns>
                            <Columns.Column
                                offset={ORDER[order]}
                                md={8}>
                                <Heading.Number number={`0${i + 1}`}>{item.title}</Heading.Number>

                                <RichText className="mt-1.5">{item.description}</RichText>
                            </Columns.Column>
                        </Columns>
                    ),
                };
            })}
        />
    );
};

export default Number;
