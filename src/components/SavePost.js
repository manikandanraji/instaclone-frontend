import React, { useEffect, useState } from "react";
import { client } from "../utils";
import { BookmarkIcon, FilledBookmarkIcon } from "./Icons";

const SavePost = ({ isSaved, postId }) => {
  const [savedState, setSaved] = useState(isSaved);

  useEffect(() => {
    setSaved(isSaved);
  }, [isSaved]);

  const handleToggleSave = () => {
    if (savedState) {
      setSaved(false);
			client(`/posts/${postId}/toggleSave`)
    } else {
      setSaved(true);
			client(`/posts/${postId}/toggleSave`)
    }
  };

  if (savedState) {
    return <FilledBookmarkIcon onClick={handleToggleSave} />;
  }

  if (!savedState) {
    return <BookmarkIcon onClick={handleToggleSave} />;
  }
};

export default SavePost;
