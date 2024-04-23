import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga4";
import { InitOptions } from "react-ga4/types/ga4";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
// import Navbar from "./components/navbar/Navbar";

// using https://www.npmjs.com/package/react-ga4
// array of tracker data objects
// ReactGA.initialize([]);
const BackgroundLayer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("./background.webp");
  background-size: cover;
`;
const LayoutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: 960px;
  height: 100%;
  width: 80vw;
  background: rgba(51, 98, 170, 0.3);
`;

const BodyWrapper = styled.div`
  padding: 6em;
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
    <BackgroundLayer>
      <LayoutWrapper>
        <Header />
        <StyledLine />
        <BodyWrapper>
          <Profile />
          {/* <NavbarWrapper>
            <Navbar />
          </NavbarWrapper> */}
        </BodyWrapper>
        <Footer />
      </LayoutWrapper>
    </BackgroundLayer>
  );
}

export default App;
