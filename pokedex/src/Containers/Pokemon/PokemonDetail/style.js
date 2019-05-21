import styled from "styled-components";

const PokemonDetailWrapper = styled.div`
  .profile-content {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
      url("http://dev.w4e.com.br/felipe/fundoPoke.jpg") repeat-x center;
    height: 85px;
    background-size: cover;
    display: flex;
    margin-top: 10px;

    .profile {
      position: relative;
      flex: 1;

    }
    .title {
      flex: 1 0 68%;
      display: flex;
      align-items: flex-end;

      h1 {
        text-transform: capitalize;
        color: #fff;
        font-family: "Raleway", sans-serif;
      }
    }
  }

  .content {
    margin-top: 50px;
    display: flex;

    .skills {
      width: 25%;
      height: 285px;
      overflow-y: scroll;
      overflow-y: scroll;

      .individual {
        h3 {
          text-transform: capitalize;
          margin-bottom: 0;
        }
      }
    }

    .content-moves {
      width: 75%;
      .moves {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        height: 240px;
        overflow-y: scroll;

        .move-item {
          border: 1px solid #ccc;
          border-radius: 5px;
          text-align: center;
          text-transform: capitalize;
          display: flex;
          align-items: center;
          padding: 8px;
          font-weight: 700;
          justify-content: center;
          width: 21%;
          margin: 1px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default PokemonDetailWrapper;
