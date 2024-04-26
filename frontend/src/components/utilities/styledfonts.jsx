import React from "react";
import styled from "styled-components";

const SectionTitle = styled.div`
  color: #636363;
  font-size: 1.8em;
  font-weight: 600;
  padding-top: 1em;
  @media (max-width: 720px) {
    font-size: 1.2em;
    padding-top: 0;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1em;
`;

const SectionHeading = styled.span`
  font-size: 1.3em;
  font-weight: 700;
`;

const SectionSubHeading = styled.span`
  color: #636363;
  font-size: 1.2em;
  font-weight: 700;
`;

const BoldText = styled.span`
  font-size: 1em;
  font-weight: 700;
`;

export {
  SectionTitle,
  StyledParagraph,
  BoldText,
  SectionHeading,
  SectionSubHeading,
};
