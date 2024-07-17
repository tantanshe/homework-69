import {configureStore} from '@reduxjs/toolkit';
import {searchesSlice} from '../store/searchesSlice';
import {showsSlice} from '../store/showsSlice';

export const store = configureStore({
  reducer: {
    searches: searchesSlice.reducer,
    shows: showsSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;