import styled, { css } from "styled-components";

const CardWrapper = styled.div`
  ${props => {
    const { expand } = props;

    if (expand) {
      return css`
        font-family: "Raleway", sans-serif;
        background: #fff;
        padding: 14px;
        position: absolute;
        z-index: 99;
        left: 12px;
        right: 12px;
        bottom: 12px;
        top: 12px;

        .view-detalhes {
          display: flex;
          justify-content: flex-end;
          cursor: pointer;
        }
      `;
    }
    return css`
      font-family: "Raleway", sans-serif;
      background: #fff;
      padding: 14px;

      .view-detalhes {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .check-confirm {
          margin: 0 15px;
          color: #41d046;
        }

        button + button {
          margin-left: 10px;
        }
      }
    `;
  }}
`;

export default CardWrapper;
