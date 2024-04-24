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
  align-items: center;
`;

const ImageContainer = styled.div`
  align-self: flex-start;
  flex: 0 0 auto;
  margin: 2em 2vw 8vw 0;
`;
const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const TitleContainer = styled.h2`
  font-size: 2.5em;
`;
const SubtitleContainer = styled.h3`
  font-size: 1.3em;
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
        <StyledImage src="./headshot.jpg" alt="Profile" />
      </ImageContainer>
      <InfoContainer>
        <TitleContainer>Camille Chaustre McNally</TitleContainer>
        <SubtitleContainer>
          DATA ANALYST | MASTERS OF PUBLIC HEALTH, EPIDEMIOLOGY
        </SubtitleContainer>
        <Navbar setActiveView={setActiveView} />
        {_renderActiveView()}
      </InfoContainer>
    </LayoutWrapper>
  );
};

export default Profile;
