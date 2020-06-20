import React from "react";
import styled from "styled-components";
import Avatar from "../styles/Avatar";

const CommentWrapper = styled.div`
	display: flex;

	span {
		padding-right: 0.4rem;
	}
`;

const Comment = ({ comment, hideavatar }) => {
	return (
		<CommentWrapper style={{ padding: !hideavatar ? "0.4rem 0" : "" }}>
			{!hideavatar && <Avatar src={comment.user?.avatar} alt="avatar" />}
			<p>
				<span className="bold">{comment.user && comment.user.username}</span>
				{comment.text}
			</p>
		</CommentWrapper>
	);
};

export default Comment;
