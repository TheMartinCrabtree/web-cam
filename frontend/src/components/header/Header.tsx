import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #edf3ff;
  color: #585858;
  padding: 10px 20px;
`;
const LeftHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightHeaderContainer = styled.div`
  display: flex;
`;

const DotIcon = styled.span`
  width: 1.2em; /* Adjust the size of the dot */
  height: 1.2em; /* Adjust the size of the dot */
  background-color: blue;
  border-radius: 90%;
  display: inline-block;
  position: relative;
  transform: translate(0%, 20%);
`;

const IconContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const NameContainer = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
const TitleContainer = styled.div`
  margin-left: 20px;
  font-size: 1rem;
  align-self: flex-end;
`;
const ResumeContainer = styled.div`
  margin-left: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: darkgray;
  }
`;
const ContactContainer = styled.div`
  margin-left: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: darkgray;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <IconContainer>
          <DotIcon />
        </IconContainer>
        <NameContainer>CCM</NameContainer>
        <TitleContainer>Data Analyst</TitleContainer>
      </LeftHeaderContainer>
      <RightHeaderContainer>
        <ResumeContainer>Resume</ResumeContainer>
        <ContactContainer>Contact</ContactContainer>
      </RightHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
