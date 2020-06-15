import React from 'react'
import styled from 'styled-components'
import avatar from "../assets/avatar.jpg"
import Avatar from "../styles/Avatar";

const CommentWrapper = styled.div`
	display: flex;
	margin-bottom: 0.5rem;
`

const Comment = ({ comment }) => {
	return (
		<CommentWrapper>
			<Avatar src={avatar} alt="avatar" />
			<div className="class-info">
				<span className="bold">{comment.username}</span>
				<p>{comment.text}</p>
			</div>
		</CommentWrapper>
	)
}

export default Comment;
