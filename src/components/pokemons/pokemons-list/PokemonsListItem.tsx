import { FC } from "react";
import { PokemonsListItemWrapper } from "./PokemonsList.styled";

type PokemonsListItemProps = {
  name: string;
  url: string;
};

const PokemonsListItem: FC<PokemonsListItemProps> = ({ name, url }) => {
  return (
    <PokemonsListItemWrapper>
      <img src={url} alt="Pokemon" />
      <p>{name}</p>
    </PokemonsListItemWrapper>
  );
};

export default PokemonsListItem;
