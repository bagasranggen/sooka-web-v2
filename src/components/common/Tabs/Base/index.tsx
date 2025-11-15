'use client';

import React, { useState } from 'react';

import { ArrayString, PropsClassname } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Tab, { TabProps } from '@/components/common/Tabs/Tab';
import Button from '@/components/common/Button';

export type BaseItemProps = {
    title: React.ReactNode;
    titleClass?: PropsClassname['className'];
} & Pick<TabProps, 'id' | 'children'>;

export type BaseProps = {
    items: BaseItemProps[];
} & PropsClassname;

const Base = ({ items, className }: BaseProps): React.ReactElement => {
    const [active, setActive] = useState<BaseItemProps['id']>(items[0].id);
    const [tabFade, setTabFade] = useState<boolean>(false);

    let listClass: ArrayString = ['flex mb-3'];
    listClass.push('justify-start md:justify-center');
    listClass.push('whitespace-nowrap md:whitespace-normal');
    listClass.push('overflow-x-auto');
    if (className) listClass.push(className);
    listClass = joinArrayString(listClass);

    return (
        <>
            <ul {...(listClass ? { className: listClass } : {})}>
                {items.map((item: BaseItemProps, i: number) => {
                    let itemClass: ArrayString = ['[&:not(:first-child)]:ms-3'];
                    if (item.id === active) itemClass.push('active');
                    if (item.titleClass) itemClass.push(item.titleClass);
                    itemClass = joinArrayString(itemClass);

                    return (
                        <li
                            key={i}
                            className={itemClass}>
                            <Button
                                as="anchor"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();

                                    setActive(item.id);
                                    setTabFade(true);

                                    setTimeout(() => {
                                        setTabFade(false);
                                    }, 20);
                                }}>
                                {item.title}
                            </Button>
                        </li>
                    );
                })}
            </ul>

            <div className="">
                {items.map((item: BaseItemProps, i: number) => {
                    return (
                        <Tab
                            id={item.id}
                            active={active}
                            tabFade={tabFade}
                            key={i}>
                            {item.children}
                        </Tab>
                    );
                })}
            </div>
        </>
    );
};

export default Base;
