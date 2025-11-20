'use client';

import React, { createContext, PropsWithChildren } from 'react';

export type GlobalState = {
    isDev: boolean;
    usePreloader: boolean;
};

export const GlobalStateContext = createContext<GlobalState>({
    isDev: false,
    usePreloader: false,
});

export const GlobalStateContextProvider = ({ children }: PropsWithChildren) => {
    const isDev = process.env.NODE_ENV === 'development';
    const usePreloader = process.env.NEXT_PUBLIC_FF_PRELOADER === '1';

    const defaultContext = { isDev, usePreloader };

    return <GlobalStateContext.Provider value={defaultContext}>{children}</GlobalStateContext.Provider>;
};
