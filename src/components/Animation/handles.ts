import { createAnimationHandles } from '@/libs/factory';

import { fade, fadeIn } from '@/components/Animation/elements/Fade';

export const ANIMATION_VARIANTS = {
    FADE_BASE: 'fade',
    FADE_IN: 'fade-in',
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
};
