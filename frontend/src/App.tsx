import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga4";
import { InitOptions } from "react-ga4/types/ga4";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";

// using https://www.npmjs.com/package/react-ga4
// array of tracker data objects
// ReactGA.initialize([]);

const LayoutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: 600px;
  width: 80vw;
`;

function App() {
  return (
    <LayoutWrapper>
      <Header />
      <Profile />
      <div>footer</div>
    </LayoutWrapper>
  );
}

export default App;
