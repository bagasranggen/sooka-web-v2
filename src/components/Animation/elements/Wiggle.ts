import { BaseAnimationProps } from '@/libs/@types';

import { gsap } from 'gsap';

export const wiggle = ({ element, config }: BaseAnimationProps) => {
    const tl = gsap.timeline({
        ...(config?.loop ? { repeat: -1 } : {}),
        onComplete: () => gsap.set(element, { clearProps: 'transform' }) as unknown as void,
    });

    tl.to(element, { rotate: '10deg' })
        .to(element, { rotate: '-10deg' })
        .to(element, { rotate: '20deg' })
        .to(element, { rotate: '-5deg' })
        .to(element, { rotate: '0deg' })
        .then(() => {
            if (config?.onComplete) config.onComplete();
        });
};
