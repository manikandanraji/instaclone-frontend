import React, { useState } from "react";
import styled from "styled-components";
import ProfileForm from "./ProfileForm";
import ChangePassword from "./ChangePassword";

const Wrapper = styled.div`
	grid-template-columns: 240px 1fr;
	width: 930px;
	border: 1px solid #dbdbdb;
	display: grid;
	background: #fff;

	.tabs {
		border-right: 1px solid #dbdbdb;
		padding: 1rem;
	}

	ul {
		list-style-type: none;
	}

	li {
		margin-bottom: 1.5rem;
		cursor: pointer;
	}

	.profile-form-container {
		display: flex;
		justify-content: center;
	}
`;

const EditProfile = () => {
	const [tab, setTab] = useState("profile");

	return (
		<Wrapper>
			<div className="tabs">
				<ul>
					<li
						onClick={() => setTab("profile")}
						className={tab === "profile" ? "bold" : ""}
					>
						Edit Profile
					</li>
					<li
						onClick={() => setTab("changepw")}
						className={tab === "changepw" ? "bold" : ""}
					>
						Change Password
					</li>
				</ul>
			</div>

			{tab === "profile" && (
				<div className="profile-form-container">
					<ProfileForm />
				</div>
			)}

			{tab === "changepw" && (
				<div className="profile-form-container">
					<ChangePassword />
				</div>
			)}
		</Wrapper>
	);
};

export default EditProfile;
