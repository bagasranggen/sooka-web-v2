'use client';

import React, { Ref } from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { useMeasure } from 'react-use';

import Icon from '@/components/common/Icon';
import Base, { BaseProps, BaseRefProps } from '@/components/common/Button/Base';

export type ArrowProps = {
    size?: 'md' | 'lg';
} & BaseProps;

const Arrow = ({ children, size = 'md', style, ...props }: ArrowProps): React.ReactElement => {
    const [buttonRef, { width: buttonWidth }] = useMeasure();
    const [circleRef, { width: circleWidth }] = useMeasure();

    let btnClass: ArrayStringProps = ['group btn btn--arrow'];
    if (size === 'md') btnClass.push('btn--md');
    if (size === 'lg') btnClass.push('btn--lg');
    btnClass = joinArrayString(btnClass);

    let btnStyle = style;
    btnStyle = Object.assign(btnStyle ?? {}, {
        '--btn-arrow-scale': (buttonWidth / circleWidth) * 4,
    } as React.CSSProperties);

    let btnProps = props;
    if (btnStyle) btnProps = Object.assign(btnProps ?? {}, { style: btnStyle });
    if (btnClass) btnProps = Object.assign(btnProps ?? {}, { className: btnClass });

    return (
        <Base
            ref={buttonRef as Ref<BaseRefProps>}
            {...btnProps}>
            <span className="btn__text">{children}</span>
            <div className="btn__circle">
                <div
                    ref={circleRef as Ref<HTMLDivElement>}
                    className="btn__icon">
                    <Icon.Arrow size={size} />
                </div>
            </div>
        </Base>
    );
};

export default Arrow;
