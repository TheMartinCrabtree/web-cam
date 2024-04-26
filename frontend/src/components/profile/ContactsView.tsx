import React from "react";
import styled from "styled-components";
import { SectionTitle, StyledParagraph } from "../utilities/styledfonts";

const ContactsView = () => {
  return (
    <>
      <SectionTitle>CONTACT ME</SectionTitle>
      <StyledParagraph>
        Email:{" "}
        <a href="mailto:camille.c.mcnally@gmail.com ">
          camille.c.mcnally@gmail.com
        </a>
      </StyledParagraph>
      <StyledParagraph>Phone: (646) 397-5366</StyledParagraph>
    </>
  );
};

export default ContactsView;
