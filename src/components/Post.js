import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import LikePost from "./LikePost";
import SavePost from "./SavePost";
import Comment from "./Comment";
import useInput from "../hooks/useInput";
import { addComment } from "../services/api";
import { CommentIcon, InboxIcon } from "./Icons";

export const PostWrapper = styled.div`
	width: 615px;
	background: #fff;
	border: 1px solid #dbdbdb;
	margin-bottom: 1.5rem;

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
		padding-top: 0.3rem;
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
		font-family: "Fira Sans", sans-serif;
	}
`;

const Post = ({ post }) => {
	const comment = useInput("");
	const history = useHistory();

	const [commentsState, setComments] = useState(post.comments);
	const [likesState, setLikes] = useState(post.likesCount);

	const incLikes = () => setLikes(likesState + 1);
	const decLikes = () => setLikes(likesState - 1);

	const handleAddComment = e => {
		if (e.keyCode === 13) {
			e.preventDefault();

			addComment({
				postId: post._id,
				body: { text: comment.value }
			}).then(resp => setComments([...commentsState, resp.data.data]));

			comment.setValue("");
		}
	};

	return (
		<PostWrapper>
			<div className="post-header">
				<img className="avatar" src={post.user?.avatar} alt="avatar" />
				<h3>{post.user?.username}</h3>
			</div>

			<img
				className="post-img"
				src={post.files?.length && post.files[0]}
				alt="post-img"
			/>

			<div className="post-actions">
				<LikePost
					isLiked={post.isLiked}
					postId={post._id}
					incLikes={incLikes}
					decLikes={decLikes}
				/>
				<CommentIcon onClick={() => history.push(`/p/${post._id}`)} />
				<InboxIcon />
				<SavePost isSaved={post.isSaved} postId={post._id} />
			</div>

			<div className="likes-caption-comments">
				{likesState !== 0 && (
					<span className="likes bold">
						{likesState} {likesState > 1 ? "likes" : "like"}
					</span>
				)}

				<p>
					<span className="username bold">{post.user?.username}</span>
					{post.caption}
				</p>

				{commentsState.map(comment => (
					<Comment key={comment._id} hideavatar={true} comment={comment} />
				))}
			</div>

			<div className="add-comment">
				<textarea
					columns="3"
					placeholder="Add a Comment"
					value={comment.value}
					onChange={comment.onChange}
					onKeyDown={handleAddComment}
				></textarea>
			</div>
		</PostWrapper>
	);
};

export default Post;
