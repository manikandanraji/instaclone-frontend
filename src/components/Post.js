import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatar.jpg";
import post from "../assets/post.jpg";
import { HeartIcon, CommentIcon, InboxIcon, BookmarkIcon } from "./Icons";

const PostWrapper = styled.div`
	margin: 1rem 0;
	width: 615px;
	background: #fff;
	border: 1px solid #dbdbdb;

	.post-header {
		display: flex;
		align-items: center;
		padding: 1rem;
	}

	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 16px;
		margin-right: 1rem;
	}

	.post-img {
		width: 100%;
		height: 100%;
	}

	.post-actions {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		padding-bottom: 0.2rem;
	}

	.post-actions svg:last-child {
		margin-left: auto;
	}

	svg {
		margin-right: 1rem;
	}

	.likes-caption-comments {
		padding: 1rem;
	}

	.bold {
		font-weight: 500;
	}

	.username {
		padding-right: 0.3rem;
	}

	textarea {
		height: 100%;
		width: 100%;
		border: none;
		border-top: 1px solid #dbdbdb;
		resize: none;
		padding: 1rem 0 0 1rem;
		font-size: 1rem;
		font-family: 'Fira Sans', sans-serif;
	}
`;

const Post = () => {
	const comments = [
		{ user: "wesbos", text: "that looks slick mate, well done" },
		{ user: "scotttolinksi", text: "woah, the layout is so fluid " },
		{
			user: "bradtraversy",
			text: "that looks slick mate, well done some meaningful comment"
		}
	];

	return (
		<PostWrapper>
			<div className="post-header">
				<img className="avatar" src={avatar} alt="avatar" />
				<h3>polygonrunaway</h3>
			</div>

			<img className="post-img" src={post} alt="post-img" />

			<div className="post-actions">
				<HeartIcon />
				<CommentIcon />
				<InboxIcon />
				<BookmarkIcon />
			</div>

			<div class="likes-caption-comments">
				<span class="likes bold">19, 343 likes</span>

				{comments.map(comment => (
					<p>
						<span class="username bold">{comment.user}</span>
						{comment.text}
					</p>
				))}
			</div>

			<div className="add-comment">
				<textarea columns="3" placeholder="Add a Comment"></textarea>
			</div>
		</PostWrapper>
	);
};

export default Post;
