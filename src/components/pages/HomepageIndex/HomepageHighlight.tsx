import React from 'react';

import { ArrayString, PropsClassname } from '@/libs/@types';
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
} & PropsClassname;

const HomepageHighlight = ({ items, className }: HomepageHighlightProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let tabClass: ArrayString = ['relative z-10'];
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
                                spacing={{ x: 3, y: 4 }}
                                columns={{ xs: 1, sm: 2, md: 4 }}
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
