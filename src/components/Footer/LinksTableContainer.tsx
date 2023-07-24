import CompanyLinks from "./CompanyLinks";
import { LinksTableWrapper } from "./LinksTableWrapper";
import ProductLinks from "./ProductLinks";
import SocialLinks from "./SocialLinks";

const LinksTableContainer = () => {
  return (
    <LinksTableWrapper>
      <CompanyLinks />
      <ProductLinks />
      <SocialLinks />
    </LinksTableWrapper>
  );
};

export default LinksTableContainer;
