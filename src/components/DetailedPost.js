import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatar.jpg";
import detailedPost from "../assets/detailed_post.jpg";
import { HeartIcon, CommentIcon, InboxIcon, BookmarkIcon } from "./Icons";
import Comment from "./Comment";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	border: 1px solid #dbdbdb;

	.post-header {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dbdbdb;
		padding: 1rem;
	}

	.post-img {
		width: 500px;
		height: 550px;
		object-fit: "cover";
	}

	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 16px;
		margin-right: 1rem;
	}

	.post-actions-stats {
		padding: 1rem;
	}

	.post-actions {
		display: flex;
		align-items: center;
		padding-bottom: 0.5rem;
	}

	.post-actions svg:last-child {
		margin-left: auto;
	}

	.comments {
		border-bottom: 1px solid #dbdbdb;
		padding: 1rem;
		height: 330px;
		overflow-y: scroll;
		scrollbar-width: none;
	}

	.comments::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	svg {
		margin-right: 1rem;
	}

	textarea {
		height: 100%;
		width: 100%;
		background: #fafafa;
		border: none;
		border-top: 1px solid #dbdbdb;
		resize: none;
		padding: 1rem 0 0 1rem;
		font-size: 1rem;
		font-family: "Fira Sans", sans-serif;
	}
`;

const DetailedPost = () => {
	const comments = [
		{ username: "wesbos", text: "looks slick dude, keep doing it" },
		{ username: "wesbos", text: "looks slick dude, keep doing it" },
		{ username: "wesbos", text: "looks slick dude, some random keep doing it" },
		{ username: "wesbos", text: "looks some randomslick dude, keep doing it" },
		{ username: "wesbos", text: "looks slick dude, keep doing it" },
		{ username: "wesbos", text: "looks slick dude, keep doing it" }
	];

	return (
		<Wrapper>
			<img className="post-img" src={detailedPost} alt="post" />
			<div className="post-info">
				<div className="post-header">
					<img className="avatar" src={avatar} alt="avatar" />
					<h3>polygonrunaway</h3>
				</div>

				<div className="comments">
					{comments.map(comment => (
						<Comment comment={comment} />
					))}
				</div>

				<div className="post-actions-stats">
					<div className="post-actions">
						<HeartIcon />
						<CommentIcon />
						<InboxIcon />
						<BookmarkIcon />
					</div>
					<span className="bold">18,123 likes</span>
				</div>

				<div className="add-comment">
					<textarea columns="2" placeholder="Add a Comment"></textarea>
				</div>
			</div>
		</Wrapper>
	);
};

export default DetailedPost;
