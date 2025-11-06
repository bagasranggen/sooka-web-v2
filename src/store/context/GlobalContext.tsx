'use client';

import React, { createContext, PropsWithChildren } from 'react';

export type GlobalState = {
    isDev: boolean;
};

export const GlobalStateContext = createContext<GlobalState>({
    isDev: false,
});

export const GlobalStateContextProvider = ({ children }: PropsWithChildren) => {
    const isDev = process.env.NODE_ENV === 'development';

    const defaultContext = { isDev };

    return <GlobalStateContext.Provider value={defaultContext}>{children}</GlobalStateContext.Provider>;
};
