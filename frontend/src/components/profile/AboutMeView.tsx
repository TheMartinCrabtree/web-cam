import React from "react";
import styled from "styled-components";
import { TextBlockHeading, StyledParagraph } from "../utilities/styledfonts";

const AboutMeView = () => {
  return (
    <>
      <TextBlockHeading>ABOUT ME</TextBlockHeading>
      <StyledParagraph>
        My name is Camille Chaustre McNally, I’m a healthcare data analyst based
        in Brooklyn. With expertise in SAS, SQL, Tableau, Power BI, and ArcGIS,
        I analyze and transform complex healthcare data into insights and
        visualizations that help people understand health at a population level.
      </StyledParagraph>
      <StyledParagraph>
        My career journey began in Public Health, where I served as a City
        Research Scientist for the Bureau of HIV at the NYC Department of Health
        and Mental Hygiene. During this time, I worked on projects addressing
        healthcare inequities, in order to understand the health concern of
        underserved communities in New York City and to advocate for better
        access to healthcare. During the COVID 19 crisis, my interests in
        geographic data and healthcare inequities allowed me to identify
        hospitals with high need populations, and help direct resources to the
        communities hardest hit by the pandemic.
      </StyledParagraph>

      <StyledParagraph>
        Currently, at Centene’s Health Net Federal Services, I continue to
        utilize my skills to identify health challenges and barriers to access
        among armed service members and their families, and improve patient
        outcomes through innovative data analysis and visualization.
      </StyledParagraph>
      <StyledParagraph>
        Outside of work, I have a passion for languages and am currently
        studying Mandarin. On rainy days I enjoy a good sci fi novel, and on
        sunny days I can be found wandering Brooklyn looking for interesting
        cultural events and the best baked goods in the city.
      </StyledParagraph>
    </>
  );
};

export default AboutMeView;
