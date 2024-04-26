import React from "react";
import styled from "styled-components";
import {
  StyledHR,
  SectionTitle,
  StyledParagraph,
  BoldText,
  SectionSubHeading,
} from "../utilities/styledfonts";

const ImageContainer = styled.div`
  padding: 2em;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  gap: 1em;
`;

const ProjectItem = styled.div`
  background-color: #daddf3;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
`;

const ProjectView = () => {
  return (
    <>
      <SectionTitle>PROJECTS</SectionTitle>
      <StyledHR />
      <ProjectContainer>
        <ProjectItem>
          <ImageContainer>
            <StyledImage
              src="./ccm-presentation1.webp"
              alt="screenshot of Geographic Distribution presentation"
            />
          </ImageContainer>
          <SectionSubHeading>
            <a href="https://www.linkedin.com/in/camillechaustremcnally/details/experience/1556242725001/single-media-viewer/?profileId=ACoAAAQ3x4QB9gOJy3VHqHQmMWtk9rsEG_-tLbw">
              Geographic Distribution of Hepatitis C in Burlington County
            </a>
          </SectionSubHeading>
          <StyledParagraph>
            5th Annual New York City Epidemiology Forum · Jan 1, 2018
          </StyledParagraph>
        </ProjectItem>
        <ProjectItem>
          <ImageContainer>
            <StyledImage
              src="./ccm-presentation2.webp"
              alt="screenshot of Undestanding the HIV Epidemic presentation"
            />
          </ImageContainer>
          <SectionSubHeading>
            <a href="https://cste.confex.com/cste/2021/meetingapp.cgi/Paper/14145">
              Understanding the HIV Epidemic in the Context of the Heterogeneity
              of Asian & Pacific Islanders in New York City
            </a>
          </SectionSubHeading>
          <StyledParagraph>
            Council of State and Territorial Epidemiologists Conference 2021 ·
            Jun 14, 2021
          </StyledParagraph>
        </ProjectItem>
      </ProjectContainer>
    </>
  );
};

export default ProjectView;
