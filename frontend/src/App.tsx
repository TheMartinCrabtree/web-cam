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

const AppWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

// width temp set to 1080px until viewport adaption
const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 1080px;
  width: 100%;
  height: 100%;
  background: url("./background.webp");
  background-size: cover;
  background-position: center;
  opacity: 0.1;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  min-height: 100%;
  width: 80vw;
  min-width: 1080px;
  background: rgba(51, 98, 170, 0.3);
`;

const BodyWrapper = styled.div`
  padding: 6em 8em 6em 6em;
  min-height: 600px;
`;

const NavbarWrapper = styled.div`
  padding: 3em 0;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f1f0f0;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <BackgroundLayer />
      <ContentContainer>
        <Header />
        <StyledLine />
        <BodyWrapper>
          <Profile />
          {/* <NavbarWrapper>
            <Navbar />
          </NavbarWrapper> */}
        </BodyWrapper>
        <Footer />
      </ContentContainer>
    </AppWrapper>
  );
}

export default App;
