import { BaseAnimationProps } from '@/libs/@types';
import { getAnimationElement } from '@/libs/utils';

import { gsap } from 'gsap';

export const preloader = ({ element }: BaseAnimationProps) => {
    const el = getAnimationElement(element);
    const icon = el.querySelector('[data-animation-preloader="icon"]');

    const tl = gsap.timeline();

    if (icon) {
        tl.add(gsap.effects.fade(icon));
        tl.add(
            gsap.effects.wiggle(icon, {
                onComplete: () => {
                    el.classList.add('-translate-y-full');
                },
            }),
            '-=.015'
        );
    }
};
