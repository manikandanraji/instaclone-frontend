import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import LikePost from "./LikePost";
import SavePost from "./SavePost";
import Comment from "./Comment";
import Avatar from "../styles/Avatar";
import Loader from "./Loader";
import useInput from "../hooks/useInput";
import { getPost, addComment } from "../services/api";
import { timeSince } from "../utils";
import { CommentIcon, InboxIcon } from "./Icons";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 60% 1fr;

	.post-info {
		border: 1px solid ${props => props.theme.borderColor};
	}

	.post-header {
		display: flex;
		align-items: center;
		border-bottom: 1px solid ${props => props.theme.borderColor};
		padding: 1rem;
	}

	.post-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.post-actions-stats {
		padding: 1rem;
		padding-bottom: 0.1rem;
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
		border-bottom: 1px solid ${props => props.theme.borderColor};
		padding: 1rem;
		height: 300px;
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
		background: ${props => props.theme.bg};
		border: none;
		border-top: 1px solid ${props => props.theme.borderColor};
		resize: none;
		padding: 1rem 0 0 1rem;
		font-size: 1rem;
		font-family: "Fira Sans", sans-serif;
	}

	@media screen and (max-width: 840px) {
		display: flex;
		flex-direction: column;

		.comments {
			height: 100%;
		}
	}
`;

const DetailedPost = () => {
	const history = useHistory();
	const { postId } = useParams();
	const comment = useInput("");
	const commmentsEndRef = useRef(null);

	const [loading, setLoading] = useState(true);
	const [post, setPost] = useState({});
	const [likesState, setLikes] = useState(0);
	const [commentsState, setComments] = useState([]);

	const incLikes = () => setLikes(likesState + 1);
	const decLikes = () => setLikes(likesState - 1);

	const scrollToBottom = () =>
		commmentsEndRef.current.scrollIntoView({ behaviour: "smooth" });

	const handleAddComment = e => {
		if (e.keyCode === 13) {
			e.preventDefault();

			addComment({
				postId: post._id,
				body: { text: comment.value }
			}).then(resp => {
				setComments([...commentsState, resp.data.data]);
				scrollToBottom()
				window.scrollTo(0, 0)
			});

			comment.setValue("");
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		getPost({ postId }).then(res => {
			setPost(res.data.data);
			setComments(res.data.data.comments);
			setLikes(res.data.data.likesCount);
			setLoading(false);
		});
	}, [postId]);

	if (loading) {
		return <Loader />;
	}

	return (
		<Wrapper>
			<img
				className="post-img"
				src={post.files?.length && post.files[0]}
				alt="post"
			/>

			<div className="post-info">
				<div className="post-header">
					<Avatar
						onClick={() => history.push(`/${post.user?.username}`)}
						className="pointer avatar"
						src={post.user?.avatar}
						alt="avatar"
					/>

					<h3
						className="pointer"
						onClick={() => history.push(`/${post.user?.username}`)}
					>
						{post.user?.username}
					</h3>
				</div>

				<div className="comments">
					{commentsState.map(comment => (
						<Comment key={comment._id} comment={comment} />
					))}
					<div ref={commmentsEndRef} />
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

				<span
					style={{ display: "block", padding: "0 1rem", paddingBottom: "1rem" }}
					className="secondary"
				>
					{timeSince(post.createdAt)} ago
				</span>

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
