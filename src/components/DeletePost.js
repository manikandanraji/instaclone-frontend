import React, { useContext } from "react";
import { FeedContext } from "../context/FeedContext";
import { deletePost } from "../services/api";

const DeletePost = ({ closeModal, postId }) => {
	const { feed, setFeed } = useContext(FeedContext);

	const handleDeletePost = () => {
		setFeed(feed.filter(post => post._id !== postId))
		deletePost({ postId }).then(res => closeModal());
	};

	return <span onClick={handleDeletePost}>Delete Post</span>;
};

export default DeletePost;
