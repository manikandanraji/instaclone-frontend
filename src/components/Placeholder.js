import React from "react";
import styled from "styled-components";
import { BookmarkIcon, PostIcon } from './Icons';

const Wrapper = styled.div`
	margin: auto;
	margin-top: 4rem;
	width: 450px;
	text-align: center;

	svg {
		height: 50px;
		width: 50px;
		margin-bottom: 1rem;
		fill: ${props => props.theme.secondaryColor};
	}
`;

const Placeholder = ({ icon, title, text }) => {
	return (
		<Wrapper>
			{icon === "bookmark" && <BookmarkIcon />}
			{icon === "post" && <PostIcon />}
			<h2>{title}</h2>
			<p>{text}</p>
		</Wrapper>
	);
};

export default Placeholder;
