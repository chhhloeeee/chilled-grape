import { styled } from "styled-components";
import BlueSplodge from "../Images/BlueSplodge.svg";

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  return (
    <div className={className}>
      <img src={BlueSplodge} alt="Splodge 1" />
      <div>
        <h2>Chilled Grape</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    </div>
  );
};

const StyledAbout = styled(About)`
  overflow: hidden;
  position: relative;
  min-height: 500px;
  color: #fff;

  img {
    position: absolute;
    width: 726.325px;
    height: 641.859px;
    transform: rotate(-140.257deg);
    z-index: -1;
    bottom: -220px;
    left: -150px;
  }
  > div {
    padding-left: 50px;
    padding-top: 200px;
    h2 {
      font-size: 36px;
      font-weight: 700;
      text-transform: uppercase;
    }
    p {
      font-size: 22px;
      font-weight: 400;
      width: 459px;
    }
  }
  @media (max-width: 600px) {
    min-height: 250px;
    img {
      width: 626.325px;
      height: 441.859px;
    }
    > div {
      padding-left: 20px;
      position: absolute;
      bottom: 5px;
      h2 {
        font-size: 20px;
      }
      p {
        font-size: 16px;
        width: 350px;
      }
    }
  }
  @media (max-width: 450px) {
    > div {
      h2 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
        width: 300px;
      }
    }
  }
`;

export default StyledAbout;
