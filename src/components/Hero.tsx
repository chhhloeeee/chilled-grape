import { styled } from "styled-components";
import NavBar from "./NavBar";
import BlueSplodge from "./Images/BlueSplodge.svg";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={className}>
      <div>
        <h2>CHILLED GRAPE</h2>
        <NavBar />
        <img src={BlueSplodge} alt="Splodge 1"></img>
      </div>

      <h1>LOREM IPSUM DOLOR SIT AMET.</h1>

      <button>Read More</button>
    </div>
  );
};

const StyledHero = styled(Hero)`
  overflow: hidden;
  margin: 0;
  div {
    h2 {
      padding-top: 6px;
      padding-left: 69px;
      font-size: 36px;
      font-weight: 700;
      color: white;
    }
    img {
      position: absolute;
      transform: rotate(-15deg);
      top: -250px;
      left: -80px;
      z-index: -1;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
  }

  h1 {
    padding: 180px 0 15px 364px;
    width: 600px;
    margin: 0;
    font-size: 36;
  }
  button {
    border-radius: 100px;
    background: var(
      --primary,
      linear-gradient(90deg, #73e0a9 0%, #5b68df 100%)
    );
    border: none;
    width: 249px;
    height: 60px;
    font-size: 22px;
    font-weight: 600;
    color: white;
    margin-left: 364px;
  }
`;
export default StyledHero;
