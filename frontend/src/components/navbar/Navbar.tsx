import React from "react";
import styled from "styled-components";

const viewOptions = ["ABOUT", "CONTACT", "PROJECTS", "RESUME"];
const buttonData = [
  {
    id: "ButtonData-button1",
    viewType: "ABOUT",
    buttonText: "About Me",
    buttonColor: "#654F6F",
  },
  {
    id: "ButtonData-button2",
    viewType: "RESUME",
    buttonText: "Resume",
    buttonColor: "#5C5D8D",
  },
  {
    id: "ButtonData-button3",
    viewType: "PROJECTS",
    buttonText: "Projects",
    buttonColor: "#6A995C",
  },
  {
    id: "ButtonData-button4",
    viewType: "CONTACT",
    buttonText: "Contact me",
    buttonColor: "#727C83",
  },
];

const LayoutWrapper = styled.div`
  padding-top: 1em;
  display: flex;
  margin-left: auto;
  justify-content: space-between;
  @media (max-width: 720px) {
    padding: 0.25em 0;
    gap: 4px;
  }
`;

const StyledButton = styled.button<{ $buttonColor: string }>`
  border: none;
  border-radius: 10px;
  width: 10vw;
  height: 4vh;
  min-width: 80px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  background-color: ${({ $buttonColor }) =>
    $buttonColor ? `${$buttonColor}` : `lightgray`};
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    color: lightgray;
    background-color: darkgray;
    border-color: lightgray;
  }
  @media (max-width: 720px) {
    font-size: 0.6em;
    height: 5vh;
  }
`;

const _renderButtons = (buttonArr: any[], setActiveView: any) => {
  return buttonArr.map(
    (btnData: {
      id: string;
      viewType: string;
      buttonText: string;
      buttonColor: string;
    }) => {
      const { id, viewType, buttonText, buttonColor } = btnData;
      return (
        buttonColor &&
        viewType && (
          <StyledButton
            onClick={() => setActiveView(viewType)}
            key={id}
            $buttonColor={buttonColor}
          >
            {buttonText}
          </StyledButton>
        )
      );
    }
  );
};

const Navbar = (props: { setActiveView: any }) => {
  return (
    <LayoutWrapper>
      {buttonData && _renderButtons(buttonData, props.setActiveView)}
    </LayoutWrapper>
  );
};

export default Navbar;
