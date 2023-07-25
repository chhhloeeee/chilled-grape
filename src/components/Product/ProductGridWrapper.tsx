import { styled } from "styled-components";

export const ProductGridWrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto;
  grid-column-gap: 90px;
  grid-row-gap: 72px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 80px;
  button {
    float: left;
    color: #5c6dde;
    font-size: 24px;
    font-weight: 600;
    background: none;
    border: none;
    grid-column: 1;
    width: 150px;
    padding: 0;
    margin-left: -12px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: auto auto;
    grid-column-gap: 60px;
    padding-top: 70px;
  }
  @media (max-width: 750px) {
    grid-template-columns: auto;
  }
`;
