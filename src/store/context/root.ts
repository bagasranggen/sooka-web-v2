import { useContext } from 'react';

import { GlobalStateContext } from '@/store/context/GlobalContext';
import { HistoryStateContext } from '@/store/context/HistoryContext';

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useHistoryStateContext = () => useContext(HistoryStateContext);
