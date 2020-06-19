import React, { useEffect, useState } from "react";
import { toggleLike } from '../services/api';
import { HeartIcon, FilledHeartIcon } from "./Icons";

const LikePost = ({ isLiked, postId, incLikes, decLikes}) => {
	const [likedState, setLiked] = useState(isLiked);

	useEffect(() => {
		setLiked(isLiked)
	}, [isLiked])

	const handleToggleLike = () => {
		if (likedState) {
			setLiked(false);
			decLikes()
			toggleLike({ postId }).then(resp => console.log(resp.data.success))
		} else {
			setLiked(true);
			incLikes()
			toggleLike({ postId }).then(resp => console.log(resp.data.success))
		}
	};

	if (likedState) {
		return <FilledHeartIcon onClick={handleToggleLike} />;
	}

	if (!likedState) {
		return <HeartIcon onClick={handleToggleLike} />;
	}
};

export default LikePost;
