import styled from "styled-components";

const Details = ({ details }) =>
  details &&
  `
    position: absolute;
    bottom: -33px;
    left: 25px;
`;

const ProfileFlipWrapper = styled.div`
  flex: 1;
  .card-flip {
    ${Details};
    background: #fff;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    box-shadow: 0px 0px 5px #aaa, inset 0px 0px 1px #000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;

    .front,
    .back {
      backface-visibility: hidden;
      img {
        width: 90px;
        height: 90px;
      }
    }

    .back {
      display: none;
      transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
    }
  }
  .card-flip:hover {
    transform-origin: center;
    transform: rotateY(180deg);

    .front {
      display: none;
    }
    .back {
      display: block;
    }
  }
`;

export default ProfileFlipWrapper;
