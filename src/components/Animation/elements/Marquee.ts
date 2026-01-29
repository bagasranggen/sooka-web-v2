import { BaseAnimationProps } from '@/libs/@types';
import { delay, getAnimationElement, getElementDimension } from '@/libs/utils';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type MarqueeConfigProps = {
    speed?: number;
    direction?: 'left' | 'right';
};

export const marquee = async ({
    element,
    config,
}: Omit<BaseAnimationProps, 'config'> & { config?: MarqueeConfigProps }) => {
    await delay({ ms: 80 });

    const el = getAnimationElement(element);
    const items = el.querySelectorAll('[data-animation-marquee="item"]');
    const itemsHalf = items ? Math.ceil(items.length / 2) : 0;

    if (items.length <= 1 || !el) return;

    const { outerWidth: textOuterWidth } = getElementDimension(items[0]);

    let duration = ((textOuterWidth / 2) * 2 * itemsHalf) / 35;
    if (config?.speed && config.speed > 1) duration = duration / config.speed;

    const tl = gsap.timeline({
        repeat: -1,
        scrollTrigger: {
            trigger: el,
            // ...options?.scrollTrigger ? options?.scrollTrigger : {},
            // markers: true,
        },
    });

    const direction = config?.direction ?? 'left';
    let xFrom = 0;
    let xTo = 0;

    if (direction === 'left') {
        xTo = textOuterWidth * itemsHalf * -1;
    }

    if (direction === 'right') {
        xFrom = textOuterWidth * itemsHalf * -1;
    }

    if (xFrom !== 0) {
        tl.set(el, { x: textOuterWidth * itemsHalf * -1 });
    }

    tl.to(el, {
        duration,
        x: xTo,
        ease: 'none',
    });

    return tl;
};
