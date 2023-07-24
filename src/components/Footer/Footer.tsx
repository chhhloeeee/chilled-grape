import About from "./About";
import { FooterWrapper } from "./FooterWrapper";
import LinksTableContainer from "./LinksTableContainer";

const Footer = () => {
  return (
    <FooterWrapper>
      <About />
      <LinksTableContainer />
    </FooterWrapper>
  );
};

export default Footer;
