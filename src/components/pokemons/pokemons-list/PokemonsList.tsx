import { memo, useEffect, useState } from "react";
import { fetchPokemons, IPokemon } from "../../../api/pokemonsApi";
import PageLoader from "../../page-loader/PageLoader";
import { PokemonsListWrapper } from "./PokemonsList.styled";
import PokemonsListItem from "./PokemonsListItem";

const PokemonsList = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<IPokemon[]>();
  const [err, setErr] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    fetchPokemons()
      .then((res) => {
        setPokemons(res.results);
      })
      .catch((err) => setErr(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <PokemonsListWrapper>
      {err ? (
        <div
          style={{ color: "red", display: "flex", justifyContent: "center" }}
        >
          {err.message}
        </div>
      ) : (
        <div className="pokemons">
          {pokemons?.map((pokemon, idx) => (
            <PokemonsListItem key={idx} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      )}
    </PokemonsListWrapper>
  );
};

export default memo(PokemonsList);
