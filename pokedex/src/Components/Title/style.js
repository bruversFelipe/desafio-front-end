import styled from "styled-components";

const TitleWrapper = styled.h2`
  color: #555;
  display: flex;
  align-items: center;
  margin: 12px 0px 20px;
  white-space: nowrap;
  font-family: "Raleway", sans-serif;
  font-size: 18px;

  span {
    white-space: nowrap;
  }

  :before {
    content: "";
    width: 5px;
    height: 40px;
    background-color: #999;
    display: flex;
    margin: 0 15px 0 0;
  }

  :after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #999;
    display: flex;
    margin: 0 0 0 15px;
  }
`;

export default TitleWrapper;
