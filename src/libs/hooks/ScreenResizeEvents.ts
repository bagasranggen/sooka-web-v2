import { useEffect, useMemo } from 'react';

import { ResponsiveProps } from '@/libs/@types';

import { useWindowSize } from 'react-use';

export const SCREEN_HANDLES: Record<'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL' | 'XXXL', ResponsiveProps> = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    XXL: '2xl',
    XXXL: '3xl',
} as const;

export type ScreenResizeEventProps = {
    endHandler?: (size?: ResponsiveProps) => void;
};

export const ScreenResizeEvents = ({ endHandler }: ScreenResizeEventProps) => {
    const { width } = useWindowSize();

    const screenSize: ResponsiveProps = useMemo(() => {
        let data = SCREEN_HANDLES.XS;

        if (width >= 576 && width < 768) data = SCREEN_HANDLES.SM;
        if (width >= 768 && width < 992) data = SCREEN_HANDLES.MD;
        if (width >= 992 && width < 1200) data = SCREEN_HANDLES.LG;
        if (width >= 1200 && width < 1400) data = SCREEN_HANDLES.XL;
        if (width >= 1400 && width < 1900) data = SCREEN_HANDLES.XXL;
        if (width >= 1900) data = SCREEN_HANDLES.XXXL;

        return data;
    }, [width]);

    useEffect(() => {
        if (endHandler) endHandler(screenSize);
    }, [screenSize]);

    return null;
};
