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

const StyledPageSectionImgWrapper = styled(PageSectionImgWrapper)``;

export default StyledPageSectionImgWrapper;
