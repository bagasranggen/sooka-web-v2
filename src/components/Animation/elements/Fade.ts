import { BaseAnimationProps } from '@/libs/@types';

import { gsap } from 'gsap';

export const fade = ({ element, config }: BaseAnimationProps) => {
    const fromVars: gsap.TweenVars = {
        ease: 'Power1.easeInOut',
        opacity: 0,
        ...config,
        onComplete: () => {
            if (config?.onComplete) config?.onComplete();
            gsap.set(element, { clearProps: 'y,opacity' });
        },
    };

    return gsap.from(element, fromVars);
};

export const fadeIn = ({ element, config, id }: BaseAnimationProps) => {
    const fadeTl = gsap.timeline({
        scrollTrigger: {
            ...(id ? { id: `fade-in-${id}` } : {}),
            trigger: element,
            // start: () => `top-=${getFadeOffset({ element }) + getSpacingValue({ element }).top} 80%`,
            toggleActions: 'play pause play pause',
            // once: true,
            markers: true,
        },
    });

    const fadeConfig: BaseAnimationProps['config'] = {
        ...config,
        y: 60,
    };

    fadeTl.fade(element, fadeConfig);
};
