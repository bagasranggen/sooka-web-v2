import { createAnimationHandles } from '@/libs/factory';

import { fade, fadeIn } from '@/components/Animation/elements/Fade';
import { marquee } from '@/components/Animation/elements/Marquee';
import { slideY } from '@/components/Animation/elements/SlideY';

export const ANIMATION_VARIANTS = {
    FADE_BASE: 'fade',
    FADE_IN: 'fade-in',
    MARQUEE: 'marquee',
    SLIDE_Y: 'slide-y',
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
        handles: ANIMATION_VARIANTS.SLIDE_Y,
        animation: slideY,
    }),
};
