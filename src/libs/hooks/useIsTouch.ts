import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useIsTouch = (): any => {
    return ScrollTrigger.isTouch === 1;
};
