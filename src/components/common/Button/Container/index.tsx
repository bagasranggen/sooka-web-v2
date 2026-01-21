import React, { Fragment, PropsWithChildren } from 'react';

import { ArrayString, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ContainerProps = {
    items: PropsWithChildren[];
} & ClassnameProps;

const Container = ({ items, className }: ContainerProps): React.ReactElement => {
    let containerClass: ArrayString = ['flex flex-wrap'];
    if (className) containerClass.push(className);
    containerClass = joinArrayString(containerClass);

    return (
        <div className={containerClass}>
            {items.map((item: PropsWithChildren, i: number) => (
                <Fragment key={i}>{item.children}</Fragment>
            ))}
        </div>
    );
};

export default Container;
