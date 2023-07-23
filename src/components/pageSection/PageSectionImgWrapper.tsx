import { styled } from "styled-components";
import BlueSplodge from "../Images/BlueSplodge.svg";

interface PageSectionImgWrapperProps {
  className?: string;
  image?: string;
}

const PageSectionImgWrapper = ({
  className,
  image,
}: PageSectionImgWrapperProps) => {
  return (
    <div className={className}>
      <img src={BlueSplodge} alt="Splodge 1" />
      <img src={image} alt={image} />
    </div>
  );
};

const StyledPageSectionImgWrapper = styled(PageSectionImgWrapper)`
  z-index: -1;
  img:nth-of-type(1) {
    position: absolute;
    padding-top: 100px;
    z-index: -5;
  }
  img:nth-of-type(2) {
    margin-top: -200px;
    padding-left: 30px;
  }
  @media (max-width: 1200px) {
    img:nth-of-type(1) {
      width: 400px;
    }
    img:nth-of-type(2) {
      width: 370px;
      margin-top: -100px;
    }
  }
  @media (max-width: 1000px) {
    padding-top: 50px;
    float: right;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: auto;
    text-align: center;
    display: block;
    img:nth-of-type(2) {
      padding: 0;
      width: 300px;
      margin-top: -50px;
    }
    img:nth-of-type(1) {
      width: 350px;
      margin-left: -25px;
    }
  }
`;

export default StyledPageSectionImgWrapper;
