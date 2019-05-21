import styled, { css } from "styled-components";

const SelectThemeWrapper = styled.div`
  ${props => {
    const {
      theme: {
        colorsThemes: { red, dark, blue, green }
      }
    } = props;

    return css`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.7);
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;

      .title {
        font-family: "Raleway", sans-serif;
      }

      .content {
        display: flex;

        > div {
          z-index: 9;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          cursor: pointer;
          margin: 0 5px;
        }

        .red {
          background: ${red};
        }
        .dark {
          background: ${dark};
        }
        .blue {
          background: ${blue};
        }
        .green {
          background: ${green};
        }
      }
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
      }
    `;
  }}
`;

export default SelectThemeWrapper;
