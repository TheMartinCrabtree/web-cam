import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import AboutMeView from "./AboutMeView";
import ResumeView from "./ResumeView";
import ProjectView from "./ProjectView";
import ContactsView from "./ContactsView";

const LayoutWrapper = styled.div`
  min-heaight: 540px;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  align-self: flex-start;
  flex: 0 0 auto;
  margin: 2em 2vw 8vw 0;
  @media (max-width: 1080px) {
    margin: 1em 1em 1em 0;
  }
  @media (max-width: 720px) {
    margin: 0 0 0 0;
    align-self: center;
  }
`;
const StyledImage = styled.img`
  max-width: 300px;
  width: 35vw;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const TitleContainer = styled.h2`
  font-size: 2.5em;
  @media (max-width: 1080px) {
    font-size: 3.5vw;
  }
  @media (max-width: 720px) {
    font-size: 4.5vw;
    text-align: center;
  }
`;
const SubtitleContainer = styled.h3`
  font-size: 1.3em;
  @media (max-width: 1080px) {
    font-size: 2.5vw;
  }
  @media (max-width: 720px) {
    font-size: 3vw;
    text-align: center;
  }
`;

const ViewContainer = styled.div``;

const Profile = () => {
  // options are: ABOUT | CONTACT | PROJECTS | RESUME
  const [activeView, setActiveView] = useState("ABOUT");

  const _renderActiveView = () => {
    console.log("activeView", activeView);

    const _getActiveView = () => {
      switch (activeView) {
        case "CONTACT":
          return <ContactsView />;
        case "PROJECTS":
          return <ProjectView />;
        case "RESUME":
          return <ResumeView />;
        case "ABOUT":
        default:
          return <AboutMeView />;
      }
    };

    return <ViewContainer>{_getActiveView()}</ViewContainer>;
  };

  return (
    <LayoutWrapper>
      <ImageContainer>
        <StyledImage src="./headshot.webp" alt="Profile" />
      </ImageContainer>
      <InfoContainer>
        <TitleContainer>Camille Chaustre McNally</TitleContainer>
        <SubtitleContainer>DATA ANALYST | MPH, EPIDEMIOLOGY</SubtitleContainer>
        {/* <Navbar setActiveView={setActiveView} /> */}
        {_renderActiveView()}
      </InfoContainer>
    </LayoutWrapper>
  );
};

export default Profile;
