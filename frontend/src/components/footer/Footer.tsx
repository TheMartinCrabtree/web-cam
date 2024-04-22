import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #edf3ff;
  color: #585858;
  padding: 10px 20px;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f1f0f0;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  a: {
    color: #585858;
    text-decoration: none;
  }
  &:hover,
  &:focus {
    color: darkgray;
  }
`;

const Footer = () => {
  return (
    <LayoutWrapper>
      <TextContainer>
        <a href="mailto:your-email@example.com">Email</a>
      </TextContainer>
      <TextContainer>
        <a href="https://github.com/yourusername">GitHub</a>
      </TextContainer>
      <TextContainer>
        <span>Placeholder TBA</span>
      </TextContainer>
      <TextContainer>
        <span>&copy; {new Date().getFullYear()} CCM</span>
      </TextContainer>
    </LayoutWrapper>
  );
};

export default Footer;
