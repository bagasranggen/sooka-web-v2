export const ANIMATION_TOGGLE = process.env.NEXT_PUBLIC_ANIMATION_TOGGLE;

export const getEnv = () => {
    return {
        animationDisabled: ANIMATION_TOGGLE === '0',
    };
};
