import { styled } from "styled-components";
import NavBar from "./NavBar";
import StyledBackground from "./Background";

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
      <div>
        <h1>LOREM IPSUM DOLOR SIT AMET.</h1>
        <button>Read More</button>
      </div>
      <StyledBackground />
    </div>
  );
};

const StyledHero = styled(Hero)`
  position: relative;
  overflow: hidden;
  height: 100vh;
  margin: 0;
  h2 {
    padding-top: 6px;
    padding-left: 69px;
    font-size: 36px;
    font-weight: 700;
    color: white;
    @media (max-width: 1000px) {
      font-size: 30px;
      padding-left: 25px;
    }
    @media (max-width: 600px) {
      font-size: 25px;
      padding-left: 25px;
    }
  }
  div:nth-of-type(2) {
    h1 {
      padding: 180px 0 15px 364px;
      width: 600px;
      margin: 0;
      font-size: 64px;
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
    @media (max-width: 1000px) {
      h1 {
        font-size: 46px;
        width: 450px;
      }
      button {
        font-size: 18px;
        width: 175px;
        height: 40px;
      }
    }
  }
`;
export default StyledHero;
