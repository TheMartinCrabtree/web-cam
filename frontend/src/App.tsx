import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga4";
import { InitOptions } from "react-ga4/types/ga4";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";

// using https://www.npmjs.com/package/react-ga4
// array of tracker data objects
// ReactGA.initialize([]);

const LayoutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: 960px;
  width: 80vw;
  background-color: yellow;
`;

const BodyWrapper = styled.div`
  background-color: lightblue;
  padding: 2em;
  min-height: 600px;
`;

function App() {
  return (
    <LayoutWrapper>
      <Header />
      <BodyWrapper>
        <Profile />
        <div>button bar</div>
      </BodyWrapper>
      <Footer />
    </LayoutWrapper>
  );
}

export default App;
