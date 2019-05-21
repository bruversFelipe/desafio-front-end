import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: relative;
  .loading-fade {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(255, 255, 255, 0.6);
  }
  .loader {
    border: 5px solid #ccc;
    border-radius: 50%;
    border-top: 5px solid ${props => props.theme.primary};
    position: absolute;
    top: 45%;
    left: 48%;
    width: 50px;
    height: 50px;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingWrapper;
