import React from "react";
import styled from "styled-components";

const buttonData = [
  {
    buttonText: "Button 1",
    buttonColor: "lightblue",
  },
  {
    buttonText: "Button 2",
    buttonColor: "lightgreen",
  },
  {
    buttonText: "Button 3",
    buttonColor: "lightgray",
  },
  {
    buttonText: "Button 4",
    buttonColor: "gold",
  },
];

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledButton = styled.button<{ buttonColor: string }>`
  border: 1px;
  border-style: solid;
  border-color: darkblue;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ buttonColor }) =>
    buttonColor ? `${buttonColor}` : `lightgray`};
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: darkgray;
  }
`;

const _renderButtons = (buttonArr: any[]) => {
  return buttonArr.map(
    (btnData: { buttonText: string; buttonColor: string }) => {
      const { buttonText, buttonColor } = btnData;
      return (
        buttonColor && (
          <StyledButton buttonColor={buttonColor}>{buttonText}</StyledButton>
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
