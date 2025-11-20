'use client';

import React, { cloneElement, useRef } from 'react';

import { AnimationProps as BaseAnimationProps } from '@/libs/@types';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { registerAnimation } from '@/components/Animation/register';

gsap.registerPlugin(useGSAP);

registerAnimation();

export type AnimationProps = {
    as?: string;
    children?: any;
} & BaseAnimationProps;

const Animation = ({ as, type, children, ...props }: AnimationProps): React.ReactElement => {
    const animationRef = useRef<null | any>(null);

    let animationProps: any = {
        ref: animationRef,
    };

    if (!children?.ref?.current) {
        animationProps = {
            ref: animationRef,
        };
    }

    if (type && !as) {
        animationProps = { ...animationProps, 'data-animation': type };
    }

    if (type && as) {
        animationProps = { ...animationProps, [`data-animation-${type}`]: as };
    }

    let config = {};
    if ('config' in props && props?.config) config = Object.assign(config, props?.config);

    useGSAP(
        () => {
            if (as) return;
            if (!type) return;
            if (type && !gsap.effects[type]) {
                console.warn({
                    message: `animation ${type} is not registered`,
                    from: animationRef.current,
                });
                return;
            }

            // gsap.effects[type](props.ref.current, config, id);
            gsap.effects[type](animationProps.ref.current, config);
        },
        { scope: animationProps.ref, dependencies: [type, as] }
    );

    return cloneElement(children, animationProps);
};

export default Animation;
