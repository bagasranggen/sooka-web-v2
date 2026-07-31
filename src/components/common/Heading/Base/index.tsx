import React, { forwardRef, PropsWithChildren } from 'react';

import { ArrayStringProps, ElementTagsProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseHeadingRef = HTMLHeadingElement;

export type BaseProps = {
    as?: Extract<ElementTagsProps, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
    family?: 'default' | 'anglecia';
    size?: 'heading' | 'section' | 'callout';
    description?: React.ReactNode;
} & (PropsWithChildren & ClassnameProps);

const Base = forwardRef<BaseHeadingRef, BaseProps>(
    ({ as: Heading = 'h1', family = 'anglecia', size, className, description, children }, ref) => {
        let wrapperClass: ArrayStringProps = [];
        if (description && className) wrapperClass.push(className);
        wrapperClass = joinArrayString(wrapperClass);

        let headingClass: ArrayStringProps = [];
        if (family === 'anglecia') headingClass.push(`font-anglecia`);
        if (size === 'heading') headingClass.push('text-[4rem] lg:text-[10rem] leading-[5rem] lg:leading-[10rem]');
        if (size === 'section') headingClass.push('text-[4rem] lg:text-[8.5rem] leading-[5rem] lg:leading-[9rem]');
        if (size === 'callout') headingClass.push('text-[4rem] md:text-[5rem] leading-[5rem] md:leading-[6rem]');
        if (!description && className) headingClass.push(className);
        headingClass = joinArrayString(headingClass);

        if (description) {
            return (
                <div
                    ref={ref}
                    className={wrapperClass}>
                    <Heading className={headingClass}>{children}</Heading>

                    {description && <div className="mt-2">{description}</div>}
                </div>
            );
        }

        return (
            <Heading
                ref={ref}
                className={headingClass}>
                {children}
            </Heading>
        );
    }
);

Base.displayName = 'Base';
export default Base;
