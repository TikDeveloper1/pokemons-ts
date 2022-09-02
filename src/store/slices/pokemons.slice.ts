import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchPokemons,
  IPokemonError,
  IPokemonsList,
} from "../../api/pokemonsApi";

type PokemonsState = {
  data: IPokemonsList | null;
  loading: boolean;
  error?: IPokemonError;
};

const initialState: PokemonsState = {
  data: null,
  loading: false,
};

export const pokemonsThunk = createAsyncThunk(
  "pokemons/get",
  async (arg, { rejectWithValue }) => {
    try {
      const pokemons = await fetchPokemons();
      return pokemons;
    } catch (e) {
      const err = e as IPokemonError;

      return rejectWithValue(err);
    }
  }
);

export const pokemonsSlice = createSlice({
  name: "pokemonsSlice",
  initialState,
  reducers: {
    // fillPokemonsData(state, { payload }: PayloadAction<IPokemonsList>) {
    //   state.data = payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(pokemonsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(pokemonsThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.error = undefined;
      })
      .addCase(pokemonsThunk.rejected, (state, { payload }) => {
        const err = payload as IPokemonError;
        state.loading = false;
        state.error = err;
      });
  },
});

// export const { fillPokemonsData } = pokemonsSlice.actions;
