import styled, { css } from "styled-components";

const Avatar = styled.img`
	width: 28px;
	height: 28px;
	border-radius: 14px;
	margin-right: 1rem;

	${props => props.lg && css`
		width: 60px;
		height: 60px;
		border-radius: 30px;
`}
`;

export default Avatar;
