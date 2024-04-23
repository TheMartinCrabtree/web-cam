import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";

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
const TextBlockHeading = styled.div`
  color: darkgray;
  font-size: 1.8em;
  padding-top: 1em;
`;
const StyledParagraph = styled.p`
  font-size: 1em;
`;

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
        <TextBlockHeading>About Me</TextBlockHeading>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          venenatis velit ac magna volutpat, eget rhoncus tortor malesuada.
          Mauris mattis mattis elit, non ultrices libero consequat in. Sed
          vehicula justo et arcu scelerisque, sit amet rutrum ex fermentum.
        </StyledParagraph>
      </InfoContainer>
    </LayoutWrapper>
  );
};

export default Profile;
