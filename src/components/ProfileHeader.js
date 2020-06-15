import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatar.jpg";
import Button from "../styles/Button";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.1rem;
	margin-bottom: 3rem;

	.avatar {
		width: 160px;
		height: 160px;
		border-radius: 80px;
		margin-right: 2rem;
	}

	.profile-meta {
		display: flex;
		align-items: baseline;
		margin-bottom: 1rem;
	}

	.profile-stats {
		display: flex;
		margin-bottom: 1rem;
	}

	span {
		padding-right: 1rem;
	}
`;

const ProfileHeader = () => {
	return (
		<Wrapper>
			<img className="avatar" src={avatar} alt="avatar" />
			<div className="profile-info">
				<div className="profile-meta">
					<h2>polygonrunaway</h2>
					<Button>follow</Button>
				</div>
				<div className="profile-stats">
					<span>512 posts</span>
					<span>126k followers</span>
					<span>244 following</span>
				</div>
				<div className="bio">
					<span className="bold">Polygon Runaway</span>
					<p>3D illustrator Follow to get inspired Learn 3D illustration</p>
					<a
						href="https://polygonrunaway.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						polygonrunaway.com
					</a>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProfileHeader;
