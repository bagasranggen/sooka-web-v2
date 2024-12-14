'use client';

import React, { cloneElement, useRef } from 'react';

import { BaseAnimationConfigProps } from '@/libs/@types';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { ANIMATION_VARIANTS } from '@/components/Animation/handles';
import { registerAnimation } from '@/components/Animation/register';

gsap.registerPlugin(useGSAP);

registerAnimation();

export type AnimationProps = {
    type?: (typeof ANIMATION_VARIANTS)[keyof typeof ANIMATION_VARIANTS];
    as?: string;
    config?: BaseAnimationConfigProps;
    children?: any;
};

const Animation = ({ as, type, config, children }: AnimationProps): React.ReactElement => {
    const animationRef = useRef<null | any>(null);

    let props: any = {
        ref: animationRef,
    };

    if (!children?.ref?.current) {
        props = {
            ref: animationRef,
        };
    }

    if (type && !as) {
        props = { ...props, 'data-animation': type };
    }

    if (type && as) {
        props = { ...props, [`data-animation-${type}`]: as };
    }

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
            gsap.effects[type](props.ref.current, config);
        },
        { scope: props.ref, dependencies: [type, as] }
    );

    return cloneElement(children, props);
};

export default Animation;
