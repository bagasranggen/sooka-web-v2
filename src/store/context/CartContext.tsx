'use client';

import React, { createContext, PropsWithChildren, useState } from 'react';

export type CartState = {};

export const CartStateContext = createContext<CartState>({});

export const CartStateContextProvider = ({ children }: PropsWithChildren) => {
    const defaultContext = {};

    return (
        <>
            <CartStateContext.Provider value={defaultContext}>{children}</CartStateContext.Provider>
        </>
    );
};
