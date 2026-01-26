import React from 'react';

import { ArrayStringProps, CreateArrayWithLengthX, NumericRange } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type OverlayProps = {
    variant: 'solid' | 'gradient-left' | 'gradient-right';
    opacity: NumericRange<CreateArrayWithLengthX<0>, 6>;
    children: React.ReactElement;
};

const Overlay = ({ variant, opacity, children }: OverlayProps) => {
    let overlayClass: ArrayStringProps = ['overlay'];
    if (variant === 'gradient-right') overlayClass.push('overlay--gradient-right');
    if (variant === 'gradient-left') overlayClass.push('overlay--gradient-left');
    overlayClass.push(`overlay--${opacity * 10}`);
    overlayClass = joinArrayString(overlayClass);

    const props: any = children.props;

    let childClass: ArrayStringProps = [overlayClass];
    if (props?.className) childClass.push(props.className);
    childClass = joinArrayString(childClass);

    return React.cloneElement(children as React.ReactElement<HTMLElement>, { className: childClass });
};

export default Overlay;
