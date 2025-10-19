import { ANIMATION_VARIANTS } from '@/components/Animation/handles';
import { SlideYConfigProps } from '@/components/Animation/elements/SlideY';
import { MarqueeConfigProps } from '@/components/Animation/elements/Marquee';

export type BaseAnimationConfigProps<Type, Config> = {
    type?: Type;
    config?: Config;
};

export type BaseAnimationProps = {
    element: HTMLElement[] | Element[] | any;
    config?: gsap.TweenVars;
    id?: number | string;
};

export type AnimationProps =
    | {
          type?: Exclude<
              (typeof ANIMATION_VARIANTS)[keyof typeof ANIMATION_VARIANTS],
              typeof ANIMATION_VARIANTS.MARQUEE | typeof ANIMATION_VARIANTS.SLIDE_Y
          >;
      }
    | BaseAnimationConfigProps<typeof ANIMATION_VARIANTS.MARQUEE, MarqueeConfigProps>
    | BaseAnimationConfigProps<typeof ANIMATION_VARIANTS.SLIDE_Y, SlideYConfigProps>;
