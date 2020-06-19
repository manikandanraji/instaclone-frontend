import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LikePost from "./LikePost";
import SavePost from "./SavePost";
import Comment from "./Comment";
import Avatar from "../styles/Avatar";
import useInput from "../hooks/useInput";
import { getPost, addComment } from "../services/api";
import { CommentIcon, InboxIcon } from "./Icons";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 60% 1fr;
	border: 1px solid #dbdbdb;

	.post-header {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dbdbdb;
		padding: 1rem;
	}

	.post-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
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
	const comment = useInput("");
	const { postId } = useParams();
	const [post, setPost] = useState({});

	const [likesState, setLikes] = useState(0);
	const [commentsState, setComments] = useState([]);

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

	useEffect(() => {
		getPost({ postId }).then(res => {
			setPost(res.data.data);
			setComments(res.data.data.comments);
			setLikes(res.data.data.likesCount);
		});
	}, [postId]);

	return (
		<Wrapper>
			<img
				className="post-img"
				src={post.files?.length && post.files[0]}
				alt="post"
			/>
			<div className="post-info">
				<div className="post-header">
					<Avatar className="avatar" src={post.user?.avatar} alt="avatar" />
					<h3>{post.user?.username}</h3>
				</div>

				<div className="comments">
					{commentsState.map(comment => (
						<Comment key={comment._id} comment={comment} />
					))}
				</div>

				<div className="post-actions-stats">
					<div className="post-actions">
						<LikePost
							isLiked={post?.isLiked}
							postId={post?._id}
							incLikes={incLikes}
							decLikes={decLikes}
						/>
						<CommentIcon />
						<InboxIcon />
						<SavePost isSaved={post?.isSaved} postId={post?._id} />
					</div>

					{likesState !== 0 && (
						<span className="likes bold">
							{likesState} {likesState > 1 ? "likes" : "like"}
						</span>
					)}
				</div>

				<div className="add-comment">
					<textarea
						columns="2"
						placeholder="Add a Comment"
						value={comment.value}
						onChange={comment.onChange}
						onKeyDown={handleAddComment}
					></textarea>
				</div>
			</div>
		</Wrapper>
	);
};

export default DetailedPost;
