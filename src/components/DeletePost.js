import React from "react";
import { deletePost } from "../services/api";

const DeletePost = ({ closeModal, postId }) => {
	const handleDeletePost = () => {
		deletePost({ postId }).then(res => closeModal());
	};

	return <span onClick={handleDeletePost}>Delete Post</span>;
};

export default DeletePost;
