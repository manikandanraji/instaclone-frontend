import React, { useContext, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import useInput from "../hooks/useInput";
import { FeedContext } from "../context/FeedContext";
import { uploadImage, createPost } from "../services/api";
import { InboxIcon } from "./Icons";

const NewPostWrapper = styled.div`
	.newpost-header {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
	}

	.newpost-header h3:first-child {
		color: ${props => props.theme.red};
	}

	h3 {
		cursor: pointer;
	}

	.newpost-header h3:last-child {
		color: ${props => props.theme.blue};
	}

	textarea {
		height: 100%;
		width: 100%;
		font-family: "Fira Sans", sans-serif;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		border: none;
		resize: none;
	}
`;

const NewPost = () => {
	const { feed, setFeed } = useContext(FeedContext);
	const caption = useInput("");
	const [showModal, setShowModal] = useState(false);
	const [preview, setPreview] = useState("");
	const [postImage, setPostImage] = useState("");

	const handleUploadImage = e => {
		if (e.target.files[0]) {
			const reader = new FileReader();

			reader.onload = e => {
				setPreview(e.target.result);
				setShowModal(true);
			};
			reader.readAsDataURL(e.target.files[0]);

			// upload to cloudinary
			const data = new FormData();
			data.append("file", e.target.files[0]);
			data.append("upload_preset", "instaclone");

			uploadImage({ body: data })
				.then(res => {
					console.log(res.data);
					setPostImage(res.data.secure_url);
				})
				.catch(err => console.log(err));
		}
	};

	const handleSubmitPost = () => {
		setShowModal(false);

		const tags = caption.value
			.split(" ")
			.filter(caption => caption.startsWith("#"));

		const cleanedCaption = caption.value
			.split(" ")
			.filter(caption => !caption.startsWith("#"))
			.join(" ");

		const newPost = {
			caption: cleanedCaption,
			files: [postImage],
			tags
		};

		createPost({ body: newPost })
			.then(res => {
				const post = res.data.data;
				post.isLiked = false;
				post.isSaved = false;
				post.isMine = true;
				setFeed([post, ...feed]);
			})
			.catch(err => console.log(err));
	};

	return (
		<NewPostWrapper>
			<label htmlFor="upload-post">
				<InboxIcon />
			</label>
			<input
				id="upload-post"
				type="file"
				onChange={handleUploadImage}
				accept="image/*"
				style={{ display: "none" }}
			/>
			{showModal && (
				<Modal>
					<div className="newpost-header">
						<h3 onClick={() => setShowModal(false)}>Cancel</h3>
						<h3 onClick={handleSubmitPost}>Share</h3>
					</div>
					{preview && <img src={preview} alt="preview" />}
					<div>
						<textarea
							placeholder="Add caption"
							value={caption.value}
							onChange={caption.onChange}
						/>
					</div>
				</Modal>
			)}
		</NewPostWrapper>
	);
};

export default NewPost;
