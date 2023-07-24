import { styled } from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  margin: auto;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
