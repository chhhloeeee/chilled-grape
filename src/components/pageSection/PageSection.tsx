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
  padding-bottom: 100px;
  height: 800px;

  @media (max-width: 1200px) {
    height: 600px;
    padding-bottom: 100px;
    grid-gap: 40px;
  }
  @media (max-width: 1000px) {
    display: block;
    width: 80%;
    padding-bottom: 400px;
  }
`;

export default PageSection;
