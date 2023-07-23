import PageSectionImgWrapper from "./pageSection/PageSectionImgWrapper";
import PageSectionTextWrapper from "./pageSection/PageSectionTextWrapper";
import Plant from "./Images/plant.png";
import PageSection from "./pageSection/PageSection";

const MainContent = () => {
  return (
    <PageSection>
      <PageSectionTextWrapper
        title="Lorem ipsum dolor sit amet."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
         consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum 
         dolor sit amet, consectetur adipiscing elit."
        bttnText="Read More"
      />
      <PageSectionImgWrapper image={Plant} />
    </PageSection>
  );
};

export default MainContent;
