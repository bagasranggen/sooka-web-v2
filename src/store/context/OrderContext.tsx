'use client';

import React, { createContext, PropsWithChildren, useState } from 'react';

import { PurchaseProps } from '@/components/common/Modal';

export type OrderState = {
    popupIsOpen: PurchaseProps['open'];
    setPopupIsOpen: React.Dispatch<React.SetStateAction<OrderState['popupIsOpen']>>;
    popupContent?: Omit<PurchaseProps, 'open' | 'onOpenChange'>;
    setPopupContent?: React.Dispatch<React.SetStateAction<OrderState['popupContent']>>;
};

export const OrderStateContext = createContext<OrderState>({
    popupIsOpen: false,
    setPopupIsOpen: () => {},
    popupContent: undefined,
    setPopupContent: () => {},
});

export const OrderStateContextProvider = ({ children }: PropsWithChildren) => {
    const [popupIsOpen, setPopupIsOpen] = useState<OrderState['popupIsOpen']>(false);
    const [popupContent, setPopupContent] = useState<OrderState['popupContent']>(undefined);

    const defaultContext = { popupIsOpen, setPopupIsOpen, popupContent, setPopupContent };

    return (
        <>
            <OrderStateContext.Provider value={defaultContext}>{children}</OrderStateContext.Provider>
        </>
    );
};
