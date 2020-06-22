import React, { useEffect, useState } from "react";
import { toggleSave } from "../services/api";
import { BookmarkIcon, FilledBookmarkIcon } from "./Icons";

const SavePost = ({ isSaved, postId }) => {
	const [savedState, setSaved] = useState(isSaved);

	useEffect(() => {
		setSaved(isSaved)
	}, [isSaved])

	const handleToggleSave = () => {
		if (savedState) {
			setSaved(false);
			toggleSave({ postId })
		} else {
			setSaved(true);
			toggleSave({ postId })
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
