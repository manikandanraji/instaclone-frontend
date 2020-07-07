import React, { useEffect, useState } from "react";
import { client } from "../utils";
import { HeartIcon, FilledHeartIcon } from "./Icons";

const LikePost = ({ isLiked, postId, incLikes, decLikes }) => {
  const [likedState, setLiked] = useState(isLiked);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  const handleToggleLike = () => {
    if (likedState) {
      setLiked(false);
      decLikes();
      client(`/posts/${postId}/toggleLike`);
    } else {
      setLiked(true);
      incLikes();
      client(`/posts/${postId}/toggleLike`);
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
