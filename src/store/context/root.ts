import { useContext } from 'react';

import { GlobalStateContext } from '@/store/context/GlobalContext';
import { HistoryStateContext } from '@/store/context/HistoryContext';
import { OrderStateContext } from '@/store/context/OrderContext';

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useHistoryStateContext = () => useContext(HistoryStateContext);
export const useOrderStateContext = () => useContext(OrderStateContext);
