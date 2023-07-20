import { styled } from "styled-components";
import BlueSplodge from "./Images/BlueSplodge.svg";
import BlueSplodgeTwo from "./Images/BlueSplodgeTwo.svg";
import BlueSplodgeThree from "./Images/BlueSplodgeThree.svg";

interface BackgroundProps {
  className?: string;
}

const Background = ({ className }: BackgroundProps) => {
  return (
    <div className={className}>
      <img src={BlueSplodge} alt="Splodge 1"></img>
      <img src={BlueSplodge} alt="Splodge 2"></img>
      <img src={BlueSplodgeThree} alt="Splodge 3"></img>
      <img src={BlueSplodgeTwo} alt="Splodge 4"></img>
      <img src={BlueSplodgeTwo} alt="Splodge 5"></img>
    </div>
  );
};

const StyledBackground = styled(Background)`
  width: 100%;
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
    transform: rotate(-140.257deg);
    width: 566.702px;
    height: 516.965px;
    top: 200px;
    right: -220px;
  }
  img:nth-of-type(3) {
    width: 332.693px;
    height: 258.906px;
    top: 120px;
    left: 590px;
    z-index: -5;
  }
  img:nth-of-type(4) {
    width: 427.407px;
    height: 319.137px;
    transform: rotate(10deg);
    top: 450px;
    right: 120px;
    z-index: -5;
  }
  img:nth-of-type(5) {
    width: 372.814px;
    height: 336.49px;
    transform: rotate(45deg);
    top: 450px;
    left: -170px;
    z-index: -5;
  }
`;
export default StyledBackground;
