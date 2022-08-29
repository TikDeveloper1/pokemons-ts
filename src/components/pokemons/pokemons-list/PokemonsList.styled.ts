import styled from "styled-components";

export const PokemonsListWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #efefef;
  .pokemons {
    width: 100%;
    max-width: 768px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

export const PokemonsListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    margin-top: 24px;
  }
`;
