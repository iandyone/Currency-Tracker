import { rootState, store } from '@store/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type dispatchType = typeof store.dispatch;
export const useDispatchTyped: () => dispatchType = useDispatch;
export const useSelectorTyped: TypedUseSelectorHook<rootState> = useSelector;
