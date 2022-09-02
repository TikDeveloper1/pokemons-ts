import styled, { css } from "styled-components";

type PokemonsListWrapperProps = {
  x?: number;
};

export const PokemonsListWrapper = styled.div<PokemonsListWrapperProps>`
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

  ${({ x }) => {
    if (x! > 8) {
      return css`
        .pokemons {
          background-color: red;
        }
      `;
    } else {
      return css`
        .pokemons {
          background-color: blue;
        }
      `;
    }
  }}
`;

export const PokemonsListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    margin-top: 24px;
  }
`;
