import styled from "styled-components";

export const BurgerBttn = styled.button`
  display: none;

  @media (max-width: 1200px) {
    position: absolute;
    top: 5%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      background-color: black;
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }
  }
`;
