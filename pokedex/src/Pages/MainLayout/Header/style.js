import styled, { css } from "styled-components";

const HeaderWrapper = styled.header`
  ${props => {
    const {
      theme: {
        header: { background, color }
      }
    } = props;
    return css`
      padding: 20px;
      background: ${background};
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 10px #6d6d6d;

      h1 {
        font-size: 24px;
        margin-bottom: 0;
        font-family: "Raleway", sans-serif;
        a {
          text-decoration: none;
          color: ${color};
        }
      }

      .right {
        display: flex;
        .settings {
          color: ${color};
          cursor: pointer;
          margin-left: 25px;
        }

        .menu {
          ul {
            display: flex;

            li {
              list-style: none;

              a {
                text-decoration: none;
                color: #fff;
                font-family: "Raleway", sans-serif;
                font-size: 15px;
                font-weight: 300;
              }

              :first-child {
                border-right: 1px solid #fff;
                padding-right: 10px;
              }
            }

            li + li {
              margin-left: 10px;
            }
          }
        }
      }
    `;
  }}
`;

export default HeaderWrapper;
