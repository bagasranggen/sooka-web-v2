export const NODE_ENV = process.env.NODE_ENV;
export const ANIMATION_TOGGLE = process.env.NEXT_PUBLIC_ANIMATION_TOGGLE;

export const getEnv = () => {
    return {
        isProduction: NODE_ENV === 'production',
        animationDisabled: ANIMATION_TOGGLE === '0',
    };
};
