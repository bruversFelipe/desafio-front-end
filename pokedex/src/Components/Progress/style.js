import styled from "styled-components";

const ProgressWrapper = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #aaa;
  overflow: hidden;

  .progress {
    background: ${props => props.theme.primary};
    height: inherit;
  }
`;

export default ProgressWrapper;
