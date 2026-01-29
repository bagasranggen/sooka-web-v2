import React from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Container from '@/components/common/Container';
import Tabs, { TabProps } from '@/components/common/Tabs';
import Heading, { BaseProps } from '@/components/common/Heading';
import Card, { ThumbnailProps } from '@/components/common/Card';

export type HomepageHighlightItemProps = {
    id: TabProps['id'];
    title: BaseProps['children'];
    items: ThumbnailProps['items'];
};

export type HomepageHighlightProps = {
    items?: HomepageHighlightItemProps[];
} & ClassnameProps;

const HomepageHighlight = ({ items, className }: HomepageHighlightProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let tabClass: ArrayStringProps = ['relative z-10'];
    if (className) tabClass.push(className);
    tabClass = joinArrayString(tabClass);

    return (
        <Container as="section">
            <Tabs
                className={tabClass}
                items={items.map((item, i, arr) => {
                    let number: string | undefined = undefined;
                    if (arr.length > 1) number = `0${i + 1}`;

                    return {
                        id: item.id,
                        titleClass: '[&:not(.active)]:opacity-60 transition-opacity duration-200',
                        title: (
                            <Heading.Number
                                number={number}
                                size="lg">
                                {item?.title}
                            </Heading.Number>
                        ),
                        children: (
                            <Card.Thumbnail
                                className="justify-center"
                                row={{ gutterY: 4 }}
                                column={{ sm: 6, md: 3 }}
                                items={item.items}
                            />
                        ),
                    };
                })}
            />
        </Container>
    );
};

export default HomepageHighlight;
