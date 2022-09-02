import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { pokemonsSlice } from "./slices/pokemons.slice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
