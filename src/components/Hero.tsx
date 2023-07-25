import { styled } from "styled-components";
import NavBar from "./Navigation/NavBar";
import Background from "./Background";
import Arrow from "./Icons/longArrowRight.svg";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={className}>
      <div>
        <h2>Chilled Grape</h2>
        <NavBar />
      </div>
      <div>
        <h1>Lorem Ipsum Dolor Sit Amet.</h1>

        <button>
          <span>Read More</span>
          <img src={Arrow} alt="Arrow Right"></img>
        </button>
      </div>
      <Background />
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
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 30px;
      padding-left: 25px;
    }
    @media (max-width: 600px) {
      font-size: 25px;
      padding-left: 15px;
    }
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  div:nth-of-type(2) {
    h1 {
      padding: 180px 0 15px 364px;
      width: 600px;
      margin: 0;
      font-size: 64px;
      text-transform: uppercase;
    }
    button {
      position: relative;
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
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;

      img {
        width: 40px;
        height: 40px;
        position: absolute;
        opacity: 0;
        top: 12px;
        right: 0;
        transition: 0.5s;
      }

      &:hover {
        padding-right: 40px;
        padding-left: 5px;
        img {
          opacity: 1;
          right: 30px;
        }
      }
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
    @media (max-width: 600px) {
      h1 {
        font-size: 36px;
        width: 350px;
      }
    }
    @media (max-width: 450px) {
      h1 {
        font-size: 28px;
        width: 280px;
      }
    }
  }
`;
export default StyledHero;
