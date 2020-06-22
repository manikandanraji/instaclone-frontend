import React from "react";
import styled from "styled-components";
import ProfileForm from "../components/ProfileForm";

const Wrapper = styled.div`
  width: 930px;
  border: 1px solid ${(props) => props.theme.borderColor};
  display: grid;
  background: ${(props) => props.theme.white};

  .tabs {
    border-right: 1px solid ${(props) => props.theme.borderColor};
    padding: 1rem;
  }

  .profile-form-container {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 970px) {
    width: 90%;
  }

  @media screen and (max-width: 700px) {
    width: 98%;
  }

  @media screen and (max-width: 550px) {
    width: 99%;
  }
`;

const EditProfile = () => {
  return (
    <Wrapper>
      <div className="profile-form-container">
        <ProfileForm />
      </div>
    </Wrapper>
  );
};

export default EditProfile;
