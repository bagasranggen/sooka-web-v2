export type BaseAnimationConfigProps = {
    marquee?: {
        speed?: number;
    };
} & gsap.TweenVars;

export type BaseAnimationProps = {
    element: HTMLElement[] | Element[] | any;
    config?: BaseAnimationConfigProps;
    id?: number | string;
};
