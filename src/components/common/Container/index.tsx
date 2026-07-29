import React, { forwardRef, PropsWithChildren } from 'react';

import { ArrayStringProps, ElementTagsProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ContainerRefProps = HTMLElement;

export type ContainerProps = {
    as?: Extract<ElementTagsProps, 'section' | 'div'>;
    fluid?: boolean;
} & (PropsWithChildren & ClassnameProps);

const Container = forwardRef<ContainerRefProps, ContainerProps>(
    ({ as: BlockContainer = 'div', fluid, className, children }, ref) => {
        let containerClass: ArrayStringProps = fluid ? ['container-fluid'] : ['container'];

        if (className) containerClass.push(className);
        containerClass = joinArrayString(containerClass);

        return (
            <BlockContainer
                ref={ref as any}
                className={containerClass}>
                {children}
            </BlockContainer>
        );
    }
);

Container.displayName = 'Container';
export default Container;
