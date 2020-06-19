import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import Avatar from "../styles/Avatar";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import { editProfile, uploadImage } from '../services/api';

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
`;

const ProfileForm = () => {
	const { user, setUser } = useContext(UserContext);
	const [newAvatar, setNewAvatar] = useState('')

	const fullname = useInput(user.fullname);
	const username = useInput(user.username);
	const bio = useInput(user.bio);
	const website = useInput(user.website);
	const email = useInput(user.email);

	const handleImageUpload = e => {
		const file = e.target.files[0]
		const data = new FormData()
		data.append('file', file)
		data.append('upload_preset', 'instaclone')

		uploadImage({ body: data }).then(res => setNewAvatar(res.data.secure_url)).catch(err => console.log(err))
	}

	const handleEditProfile = e => {
		e.preventDefault();

		const body = {
			fullname: fullname.value,
			username: username.value,
			bio: bio.value,
			website: website.value,
			email: email.value,
			avatar: newAvatar || user.avatar
		};

		editProfile({ body }).then(res => {
			console.log('submitted')
			res.data.data.token = user.token;

			// update the user context and localstorage
			setUser(res.data.data)
			localStorage.setItem('user', JSON.stringify(res.data.data))
		})

	};

	return (
		<Wrapper>
			<form onSubmit={handleEditProfile}>
				<div className="input-group change-avatar">
					<div>
						<label htmlFor="change-avatar">
							<Avatar lg src={newAvatar ? newAvatar : user.avatar} alt="avatar" />
						</label>
						<input id="change-avatar" accept="image/*" type="file" onChange={handleImageUpload}/>
					</div>
					<div className="change-avatar-meta">
						<h2>{user.username}</h2>
						<label htmlFor="change-avatar-link">
							<span>Change Profile Photo</span>
						</label>
						<input id="change-avatar-link" accept="image/*" type="file" onChange={handleImageUpload}/>
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
