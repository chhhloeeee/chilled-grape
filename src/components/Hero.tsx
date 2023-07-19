import { styled } from "styled-components";
import NavBar from "./NavBar";
import BlueSplodge from "./Images/BlueSplodge";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={className}>
      <div>
        <h2>CHILLED GRAPE</h2>
        <NavBar />
        <BlueSplodge />
      </div>
      <h1>LOREM IPSUM DOLOR SIT AMET.</h1>
      <button>Read More</button>
    </div>
  );
};

const StyledHero = styled(Hero)`
  div {
    h2 {
      padding-top: 6px;
      font-size: 36px;
      font-weight: 700;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
  }
  header {
    h1 {
      font-size: 36;
    }
  }
`;
export default StyledHero;
