import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Button from "../styles/Button";
import Avatar from "../styles/Avatar";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import { uploadImage } from "../utils";
import { client } from "../utils";

export const Wrapper = styled.div`
	padding: 1rem;

	img {
		cursor: pointer;
		margin-right: 40px;
	}

	.input-group {
		margin-top: 1.5rem;
	}

	.input-group > label {
		display: inline-block;
		width: 100px;
	}

	input,
	textarea {
		padding: 0.4rem 1rem;
		font-family: "Fira Sans", sans-serif;
		font-size: 1rem;
		border-radius: 4px;
		border: 1px solid ${props => props.theme.borderColor};
		width: 350px;
	}

	.textarea-group {
		display: flex;
	}

	.change-avatar {
		display: flex;
	}

	input[id="change-avatar"],
	input[id="change-avatar-link"] {
		display: none;
	}

	span {
		color: ${props => props.theme.blue};
		cursor: pointer;
	}

	button {
		margin-top: 1.5rem;
		margin-left: 6.25rem;
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 550px) {
		width: 98%;

		.input-group {
			display: flex;
			flex-direction: column;
		}

		label {
			padding-bottom: 0.5rem;
			font-size: 1rem;
		}

		button {
			margin-left: 0;
		}
	}

	@media screen and (max-width: 430px) {
		input,
		textarea {
			width: 99%;
		}
	}
`;

const ProfileForm = () => {
	const history = useHistory();
	const { user, setUser } = useContext(UserContext);
	const [newAvatar, setNewAvatar] = useState("");

	const fullname = useInput(user.fullname);
	const username = useInput(user.username);
	const bio = useInput(user.bio);
	const website = useInput(user.website);
	const email = useInput(user.email);

	const handleImageUpload = e => {
		if (e.target.files[0]) {
			uploadImage(e.target.files[0]).then(res => setNewAvatar(res.secure_url));
		}
	};

	const handleEditProfile = e => {
		e.preventDefault();

		if (!fullname.value) {
			return toast.error("The name field should not be empty");
		}

		if (!username.value) {
			return toast.error("The username field should not be empty");
		}

		if (!email.value) {
			return toast.error("The email field should not be empty");
		}

		const body = {
			fullname: fullname.value,
			username: username.value,
			bio: bio.value,
			website: website.value,
			email: email.value,
			avatar: newAvatar || user.avatar
		};

		client("/users", { method: "PUT", body })
			.then(res => {
				setUser(res.data);
				localStorage.setItem("user", JSON.stringify(res.data));
				history.push(`/${body.username || user.username}`);
			})
			.catch(err => toast.error(err.response.data.message));
	};

	return (
		<Wrapper>
			<form onSubmit={handleEditProfile}>
				<div className="input-group change-avatar">
					<div>
						<label htmlFor="change-avatar">
							<Avatar
								lg
								src={newAvatar ? newAvatar : user.avatar}
								alt="avatar"
							/>
						</label>
						<input
							id="change-avatar"
							accept="image/*"
							type="file"
							onChange={handleImageUpload}
						/>
					</div>
					<div className="change-avatar-meta">
						<h2>{user.username}</h2>
						<label htmlFor="change-avatar-link">
							<span>Change Profile Photo</span>
						</label>
						<input
							id="change-avatar-link"
							accept="image/*"
							type="file"
							onChange={handleImageUpload}
						/>
					</div>
				</div>

				<div className="input-group">
					<label className="bold">Name</label>
					<input
						type="text"
						value={fullname.value}
						onChange={fullname.onChange}
					/>
				</div>

				<div className="input-group">
					<label className="bold">Username</label>
					<input
						type="text"
						value={username.value}
						onChange={username.onChange}
					/>
				</div>

				<div className="input-group">
					<label className="bold">Website</label>
					<input
						type="text"
						value={website.value}
						onChange={website.onChange}
					/>
				</div>

				<div className="input-group textarea-group">
					<label className="bold">Bio</label>
					<textarea
						cols="10"
						value={bio.value}
						onChange={bio.onChange}
					></textarea>
				</div>

				<div className="input-group">
					<label className="bold">Email</label>
					<input type="email" value={email.value} onChange={email.onChange} />
				</div>

				<Button>Submit</Button>
			</form>
		</Wrapper>
	);
};

export default ProfileForm;
