import styled from "styled-components";

const PageSection = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
  padding-bottom: 150px;

  @media (max-width: 1200px) {
    padding-bottom: 50px;
    grid-gap: 40px;
  }
  @media (max-width: 1000px) {
    display: block;
    width: 80%;
  }
`;

export default PageSection;
