import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { pokemonsThunk } from "../../../store/slices/pokemons.slice";
import PageLoader from "../../page-loader/PageLoader";
import { PokemonsListWrapper } from "./PokemonsList.styled";
import PokemonsListItem from "./PokemonsListItem";

const PokemonsList = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    (async () => {
      await dispatch(pokemonsThunk());
    })();
  }, [dispatch]);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <PokemonsListWrapper x={16}>
      {error ? (
        <div
          style={{ color: "red", display: "flex", justifyContent: "center" }}
        >
          {error.message}
        </div>
      ) : (
        <div className="pokemons">
          {data?.results.map((pokemon, idx) => (
            <PokemonsListItem key={idx} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      )}
    </PokemonsListWrapper>
  );
};

export default memo(PokemonsList);
