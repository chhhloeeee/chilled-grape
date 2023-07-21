import { styled } from "styled-components";
import NavBar from "./NavBar";
import StyledBackground from "./Backbround";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={className}>
      <div>
        <h2>CHILLED GRAPE</h2>
        <NavBar />
      </div>

      <h1>LOREM IPSUM DOLOR SIT AMET.</h1>
      <button>Read More</button>
      <StyledBackground />
    </div>
  );
};

const StyledHero = styled(Hero)`
  position: relative;
  overflow: hidden;
  height: 100vh;
  margin: 0;
  div {
    h2 {
      padding-top: 6px;
      padding-left: 69px;
      font-size: 36px;
      font-weight: 700;
      color: white;
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

  @media (max-width: 1550px) {
    h1 {
      padding-left: 10%;
    }
    button {
      margin-left: 10%;
    }
  }
`;
export default StyledHero;
