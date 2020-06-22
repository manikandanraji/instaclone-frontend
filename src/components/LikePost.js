import React, { useEffect, useState } from "react";
import { toggleLike } from "../services/api";
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
      toggleLike({ postId });
    } else {
      setLiked(true);
      incLikes();
      toggleLike({ postId });
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
