import React from "react";
import styled from "styled-components";

const viewOptions = ["ABOUT", "CONTACT", "PROJECTS", "RESUME"];
const buttonData = [
  {
    id: "ButtonData-button1",
    viewType: "ABOUT",
    buttonText: "About Me",
    buttonColor: "lightblue",
  },
  {
    id: "ButtonData-button2",
    viewType: "RESUME",
    buttonText: "Resume",
    buttonColor: "lightgreen",
  },
  {
    id: "ButtonData-button3",
    viewType: "PROJECTS",
    buttonText: "Projects",
    buttonColor: "lightgray",
  },
  {
    id: "ButtonData-button4",
    viewType: "CONTACT",
    buttonText: "Contact me",
    buttonColor: "gold",
  },
];

const LayoutWrapper = styled.div`
  padding-top: 1em;
  display: flex;
  margin-left: auto;
  justify-content: space-between;
`;

const StyledButton = styled.button<{ $buttonColor: string }>`
  border: 2px;
  border-style: solid;
  border-color: darkblue;
  border-radius: 50%;
  width: 125px;
  height: 125px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ $buttonColor }) =>
    $buttonColor ? `${$buttonColor}` : `lightgray`};
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    color: lightgray;
    background-color: darkgray;
    border-color: lightgray;
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
