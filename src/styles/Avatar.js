import styled, { css } from "styled-components";

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 16px;
  margin-right: 1rem;

  ${(props) =>
    props.lg &&
    css`
      width: 56px;
      height: 56px;
      border-radius: 28px;
    `}
`;

export default Avatar;
