import React from 'react';

import { GlobalStateContextProvider } from '@/store/context/GlobalContext';
import { HistoryStateContextProvider } from '@/store/context/HistoryContext';
import { OrderStateContextProvider } from '@/store/context/OrderContext';

const ContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => (
    <GlobalStateContextProvider>
        <HistoryStateContextProvider>
            <OrderStateContextProvider>{children}</OrderStateContextProvider>
        </HistoryStateContextProvider>
    </GlobalStateContextProvider>
);

export default ContextProvider;
export * from './root';
