import { BaseAnimationProps } from '@/libs/@types';

import { gsap } from 'gsap';

export type SlideYConfigProps = {
    from: gsap.TweenValue;
    to: gsap.TweenValue;
};

export const slideY = ({ element, config }: Omit<BaseAnimationProps, 'config'> & { config?: SlideYConfigProps }) => {
    if (!config || typeof config.from === 'undefined' || !config?.to) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            // ...(id ? { id: `fade-in-${id}` } : {}),
            trigger: element,
            scrub: true,
            start: 'top+=10% bottom',
            // markers: true,
        },
    });

    gsap.set(element, { display: 'block' });
    gsap.set(element, { y: config.from });

    tl.to(element, { y: config.to });
};
