import React from 'react';

import { ArrayString, CreateArrayWithLengthX, NumericRange } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type OverlayProps = {
    variant: 'solid' | 'gradient-left' | 'gradient-right';
    opacity: NumericRange<CreateArrayWithLengthX<0>, 6>;
    children: React.ReactElement;
    // children: React.Component<React.HTMLAttributes<HTMLElement>>;
};

const Overlay = ({ variant, opacity, children }: OverlayProps) => {
    let overlayClass: ArrayString = [
        'relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full',
    ];
    if (variant !== 'solid') overlayClass.push('after:from-black');
    if (variant === 'solid') overlayClass.push('after:bg-black');
    if (variant === 'gradient-right') overlayClass.push('after:bg-gradient-to-l');
    if (variant === 'gradient-left') overlayClass.push('after:bg-gradient-to-r');
    overlayClass.push(`after:opacity-${opacity * 10}`);
    overlayClass = joinArrayString(overlayClass);

    const props: any = children.props;

    let childClass: ArrayString = [overlayClass];
    // if (props?.className) childClass.push(props.className);
    if (props?.className) childClass.push(props.className);
    childClass = joinArrayString(childClass);

    return React.cloneElement(children as React.ReactElement<HTMLElement>, { className: childClass });
};

export default Overlay;
