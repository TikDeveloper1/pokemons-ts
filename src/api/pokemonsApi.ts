import { AxiosError } from "axios";
import { api } from "../lib/axios";

export type IPokemonsList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
};

export type IPokemon = {
  name: string;
  url: string;
};

export type IPokemonError = AxiosError;

export const fetchPokemons = async () => {
  const { data } = await api.get<IPokemonsList>("/pokemon");

  return data;
};
