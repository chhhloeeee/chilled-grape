import { styled } from "styled-components";
import NavBar from "./NavBar";
import BlueSplodge from "./Images/BlueSplodge.svg";
import BlueSplodgeTwo from "./Images/BlueSplodgeTwo.svg";
import BlueSplodgeThree from "./Images/BlueSplodgeThree.svg";

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
      <img src={BlueSplodge} alt="Splodge 1"></img>

      <h1>LOREM IPSUM DOLOR SIT AMET.</h1>
      <button>Read More</button>
      <img src={BlueSplodge} alt="Splodge 2"></img>
      <img src={BlueSplodgeThree} alt="Splodge 3"></img>
      <img src={BlueSplodgeTwo} alt="Splodge 4"></img>
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
  img {
    position: absolute;
    z-index: -1;
  }
  img:nth-of-type(1) {
    transform: rotate(-15deg);
    width: 566.702px;
    height: 450.745px;
    top: -220px;
    left: -70px;
  }
  img:nth-of-type(2) {
    transform: rotate(-126.257deg);
    width: 566.702px;
    height: 516.965px;
    top: 250px;
    right: -160px;
    z-index: auto;
  }
  img:nth-of-type(3) {
    width: 332.693px;
    height: 258.906px;
    top: 120px;
    left: 590px;
  }
  img:nth-of-type(4) {
    width: 427.407px;
    height: 319.137px;
    transform: rotate(10deg);
    top: 430px;
    left: 1030px;
  }
`;
export default StyledHero;
