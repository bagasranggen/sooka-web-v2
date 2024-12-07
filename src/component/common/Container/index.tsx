import React, { JSX, PropsWithChildren } from 'react';

import { ArrayString, PropsClassname } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ContainerProps = {
    as?: keyof JSX.IntrinsicElements;
} & (PropsWithChildren & PropsClassname);

const Container = ({ as = 'div', className, children }: ContainerProps): React.ReactElement => {
    const BlockContainer = as;

    let containerClass: ArrayString = ['container'];
    if (className) containerClass.push(className);
    containerClass = joinArrayString(containerClass);

    return <BlockContainer className={containerClass}>{children}</BlockContainer>;
};

export default Container;
