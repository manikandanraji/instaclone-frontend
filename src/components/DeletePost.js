import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { FeedContext } from "../context/FeedContext";
import { deletePost } from "../services/api";

const DeletePost = ({ postId, closeModal, goToHome }) => {
	const { feed, setFeed } = useContext(FeedContext);
	const history = useHistory()

	const handleDeletePost = () => {
		closeModal()

		if(goToHome) {
			history.push(`/`)
		}

		setFeed(feed.filter(post => post._id !== postId));
		deletePost({ postId });
	};

	return <span className="danger" onClick={handleDeletePost}>Delete Post</span>;
};

export default DeletePost;
