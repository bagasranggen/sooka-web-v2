import { createAnimationHandles } from '@/libs/factory';

import { fade, fadeIn } from '@/components/Animation/elements/Fade';
import { marquee } from '@/components/Animation/elements/Marquee';

export const ANIMATION_VARIANTS = {
    FADE_BASE: 'fade',
    FADE_IN: 'fade-in',
    MARQUEE: 'marquee',
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
};
