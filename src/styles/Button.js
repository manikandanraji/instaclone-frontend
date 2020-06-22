import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: #0095f6;
  border: 1px solid #0095f6;
  padding: 0.4rem 1rem;
  color: #fff;
  border-radius: 4px;
  margin-top: 1rem;
  margin-left: 1rem;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;

  ${(props) =>
    props.secondary &&
    css`
      background: none;
      color: #242424;
      border: 1px solid #dbdbdb;
      font-weight: 500;
    `}
`;

export default Button;
