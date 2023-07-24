import { styled } from "styled-components";

export const LinksTableWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 125px;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: left;
  margin-right: 60px;
  padding-top: 200px;
  @media (max-width: 1373px) {
    grid-gap: 40px;
  }
  @media (max-width: 1200px) {
    display: block;
    padding-top: 0;
    padding-left: 20px;
    margin: 0;
  }
`;
