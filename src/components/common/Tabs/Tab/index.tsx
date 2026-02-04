import React, { PropsWithChildren } from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type TabProps = {
    id: string;
    active: TabProps['id'];
    tabFade: boolean;
} & PropsWithChildren;

const Tab = ({ id, active, tabFade, children }: TabProps): React.ReactElement => {
    let tabClass: ArrayStringProps = ['[&:not(.active)]:hidden'];
    if (id === active) tabClass.push('active');
    if (tabFade) tabClass.push('opacity-0');
    if (id === active && !tabFade) tabClass.push('transition-opacity duration-300 opacity-100');
    tabClass = joinArrayString(tabClass);

    // let props: React.HTMLAttributes<HTMLDivElement> = { id };
    let props: React.HTMLAttributes<HTMLDivElement> = {};
    if (tabClass) props = { ...props, className: tabClass };

    return <div {...props}>{children}</div>;
};

export default Tab;
