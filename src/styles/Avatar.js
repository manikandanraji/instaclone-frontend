import styled, { css } from "styled-components";

const Avatar = styled.img`
	width: 28px;
	height: 28px;
	border-radius: 14px;
	margin-right: 1rem;

	${props => props.lg && css`
		width: 56px;
		height: 56px;
		border-radius: 28px;
`}
`;

export default Avatar;
