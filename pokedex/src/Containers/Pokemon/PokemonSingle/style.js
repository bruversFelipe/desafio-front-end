import styled from "styled-components";

const PokemonSingleWrapper = styled.div`
  display: flex;
  align-items: center;
  h1 {
    text-transform: capitalize;
    font-family: "Raleway", sans-serif;
    margin-bottom: 0;
  }

  .content {
    display: flex;
    width: 85%;

    .principal {
      flex: 1;
      border-right: 1px solid #bbb;
      .detail {
        display: flex;
        align-items: center;

        div + div {
          margin-left: 15px;
        }
      }
    }
    .types {
      flex: 1;
      padding: 10px;

      h3 {
        font-family: "Raleway", sans-serif;
      }
      ul {
        padding: 0 10px 0 20px;
        li {
          text-transform: capitalize;
        }
      }
    }
  }
`;

export default PokemonSingleWrapper;
