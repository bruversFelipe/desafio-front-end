import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-weight: 400;
  text-align: center;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Raleway", sans-serif;

  i {
    margin-right: 5px;
  }

  :focus {
    outline: none;
  }
`;

const ButtonGroupWrapper = styled.div`
  display: flex;
  button {
    background: #fff;
    color: ${props => props.theme.primary};
    border: 1px solid #ccc;
    box-shadow: none;

    :first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    :last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .active {
    color: #fff;
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
  }
`;

export { ButtonGroupWrapper };

export default ButtonWrapper;
