import React from "react";
import styled from "styled-components";

const buttonData = [
  {
    id: "ButtonData-button1",
    buttonText: "About Me",
    buttonColor: "lightblue",
  },
  {
    id: "ButtonData-button2",
    buttonText: "Resume",
    buttonColor: "lightgreen",
  },
  {
    id: "ButtonData-button3",
    buttonText: "Projects and Presentations",
    buttonColor: "lightgray",
  },
  {
    id: "ButtonData-button4",
    buttonText: "Contact me",
    buttonColor: "gold",
  },
];

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
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

const _renderButtons = (buttonArr: any[]) => {
  return buttonArr.map(
    (btnData: { id: string; buttonText: string; buttonColor: string }) => {
      const { id, buttonText, buttonColor } = btnData;
      return (
        buttonColor && (
          <StyledButton key={id} $buttonColor={buttonColor}>
            {buttonText}
          </StyledButton>
        )
      );
    }
  );
};

const Navbar = () => {
  return (
    <LayoutWrapper>{buttonData && _renderButtons(buttonData)}</LayoutWrapper>
  );
};

export default Navbar;
