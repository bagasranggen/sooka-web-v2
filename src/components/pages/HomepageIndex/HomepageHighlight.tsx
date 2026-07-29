'use client';

import React from 'react';

import { useOrderStateContext } from '@/store/context';

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
};

const HomepageHighlight = ({ items }: HomepageHighlightProps): React.ReactElement | null => {
    const { popupIsOpen, setPopupIsOpen, popupContent, setPopupContent } = useOrderStateContext();

    if (!items || items.length === 0) return null;

    return (
        <Tabs
            className="relative z-10"
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
                            // onSubmit={onSubmit}
                            popup={{
                                open: popupIsOpen,
                                onOpenChange: (open) => setPopupIsOpen(open),
                                content: popupContent,
                            }}
                            onClick={(data) => {
                                setPopupIsOpen(true);
                                if (setPopupContent) setPopupContent(data);
                            }}
                        />
                    ),
                };
            })}
        />
    );
};

export default HomepageHighlight;
