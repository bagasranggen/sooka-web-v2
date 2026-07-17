import React from 'react';

import { GlobalStateContextProvider } from '@/store/context/GlobalContext';
import { HistoryStateContextProvider } from '@/store/context/HistoryContext';
import { OrderStateContextProvider } from '@/store/context/OrderContext';
import { CartStateContextProvider } from '@/store/context/CartContext';

const ContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => (
    <GlobalStateContextProvider>
        <HistoryStateContextProvider>
            <OrderStateContextProvider>
                <CartStateContextProvider>{children}</CartStateContextProvider>
            </OrderStateContextProvider>
        </HistoryStateContextProvider>
    </GlobalStateContextProvider>
);

export default ContextProvider;
export * from './root';
