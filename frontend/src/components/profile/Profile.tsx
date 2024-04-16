import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  background-color: gray;
  padding: 2em;
`;
const Profile = () => {
  return (
    <LayoutWrapper>
      <div>Image</div>
      <div>Title</div>
      <div>Subtitle</div>
      <div>Body</div>
    </LayoutWrapper>
  );
};

export default Profile;
