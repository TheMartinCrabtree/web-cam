import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
`;
const LeftHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightHeaderContainer = styled.div`
  display: flex;
`;

// const Icon = styled.img``;

const NameContainer = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
const TitleContainer = styled.div`
  font-size: 1rem;
`;
const ResumeContainer = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;
const ContactContainer = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
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
