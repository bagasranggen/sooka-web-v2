import { BaseAnimationProps } from '@/libs/@types';
import { getAnimationElement, getElementRect } from '@/libs/utils';
import { createArrayFromNumber } from '@/libs/factory';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const marquee = ({ element, config }: BaseAnimationProps) => {
    const el = getAnimationElement(element);
    const item = el.querySelector('[data-animation-marquee="item"]');
    const itemRect = getElementRect(item);
    const itemWidth = itemRect.width;
    const repeat = Math.ceil(window.innerWidth / itemWidth) + 1;
    const speed = config?.marquee?.speed ?? 1;
    const loopDuration = (itemWidth / 60) * speed;

    // Cloned items to fill screen width
    createArrayFromNumber(repeat).forEach(() => {
        const clone = item.cloneNode(true);
        el.appendChild(clone);
    });

    // Set negative position fo make infinite feel
    gsap.set(el, { x: -itemWidth });

    const tl = gsap.timeline({
        repeat: -1,
        scrollTrigger: {
            trigger: el,
            // ...options?.scrollTrigger ? options?.scrollTrigger : {},
            // markers: true,
        },
    });

    tl.to(el, loopDuration, {
        x: -itemWidth * 2,
        ease: 'none',
    });

    return tl;
};
