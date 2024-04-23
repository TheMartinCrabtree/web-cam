import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";

const LayoutWrapper = styled.div`
  min-heaight: 540px;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 2vw;
  margin-left: 8vw;
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

const TitleContainer = styled.h2``;
const SubtitleContainer = styled.h3``;
const InfoText = styled.p``;

const Profile = () => {
  return (
    <LayoutWrapper>
      <ImageContainer>
        <StyledImage src="./headshot.jpg" alt="Profile" />
      </ImageContainer>
      <InfoContainer>
        <TitleContainer>Camille Chaustre McNally</TitleContainer>
        <SubtitleContainer>
          Subtitle text: perhaps occupation and or credentials
        </SubtitleContainer>
        <Navbar />
        <InfoText>Space for a basic bio or intro here.</InfoText>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          venenatis velit ac magna volutpat, eget rhoncus tortor malesuada.
          Mauris mattis mattis elit, non ultrices libero consequat in. Sed
          vehicula justo et arcu scelerisque, sit amet rutrum ex fermentum.
        </InfoText>
      </InfoContainer>
    </LayoutWrapper>
  );
};

export default Profile;
