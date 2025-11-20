import { createAnimationHandles } from '@/libs/factory';

import { fade, fadeIn } from '@/components/Animation/elements/Fade';
import { marquee } from '@/components/Animation/elements/Marquee';
import { preloader } from '@/components/Animation/elements/Preloader';
import { slideY } from '@/components/Animation/elements/SlideY';
import { wiggle } from '@/components/Animation/elements/Wiggle';

export const ANIMATION_VARIANTS = {
    FADE_BASE: 'fade',
    FADE_IN: 'fade-in',
    MARQUEE: 'marquee',
    PRELOADER: 'preloader',
    SLIDE_Y: 'slide-y',
    WIGGLE: 'wiggle',
} as const;

export const ANIMATION_HANDLES = {
    ...createAnimationHandles({
        handles: ANIMATION_VARIANTS.FADE_BASE,
        animation: fade,
        extendTimeline: true,
    }),
    ...createAnimationHandles({
        handles: ANIMATION_VARIANTS.FADE_IN,
        animation: fadeIn,
    }),
    ...createAnimationHandles({
        handles: ANIMATION_VARIANTS.MARQUEE,
        animation: marquee,
    }),
    ...createAnimationHandles({
        handles: ANIMATION_VARIANTS.PRELOADER,
        animation: preloader,
    }),
    ...createAnimationHandles({
        handles: ANIMATION_VARIANTS.SLIDE_Y,
        animation: slideY,
    }),
    ...createAnimationHandles({
        handles: ANIMATION_VARIANTS.WIGGLE,
        animation: wiggle,
    }),
};
