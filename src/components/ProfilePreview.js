import React from "react";
import styled from "styled-components";
import avatar from "../assets/default_avatar.jpg";
import Button from "../styles/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 175px;
  height: 200px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  margin-right: 1rem;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-bottom: 1rem;
  }

  .fullname {
    font-size: 0.9rem;
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const ProfilePreview = ({ user }) => {
  return (
    <Wrapper key={user.username}>
      <img src={avatar} alt="avatar" />
      <h4>{user.username}</h4>
      <span className="fullname">{user.fullname}</span>
      <Button>Follow</Button>
    </Wrapper>
  );
};

export default ProfilePreview;
