import { styled } from "styled-components";

export const ProductCardWrapper = styled.div`
  position: relative;
  width: 330px;
  height: 400px;
  margin: 0;
  img {
    position: absolute;
    width: 369px;
    height: 314px;
    border-radius: 30px;
    top: -11px;
    left: -20px;
  }
  > div {
    position: absolute;
    z-index: -1;
    top: 0;
    width: 330px;
    height: 400px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.15);
    div {
      position: absolute;
      bottom: 20px;
      left: 19px;
      p {
        color: #212121;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0;
      }
      p:last-of-type {
        color: #747474;
      }
    }
  }
  &:hover {
    transform: scale(1.02);
    transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
  }
  @media (max-width: 450px) {
    width: 280px;
    img {
      width: 310px;
      height: 270px;
      left: -15px;
    }
    > div {
      width: 280px;
      height: 350px;
    }
  }
`;
