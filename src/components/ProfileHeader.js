import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Follow from "./Follow";
import Button from "../styles/Button";
import { UserContext } from '../context/UserContext';
import { OptionsIcon } from "./Icons";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.1rem;
	margin-bottom: 2rem;

	.avatar {
		width: 160px;
		height: 160px;
		border-radius: 80px;
		margin-right: 2rem;
		position: relative;
		top: 10px;
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

	.options svg {
		position: relative;
		top: 7px;
		margin-left: 1rem;
	}

	span {
		padding-right: 1rem;
	}
`;

const ProfileHeader = ({ profile }) => {
	const history = useHistory();
	const { setUser } = useContext(UserContext)
	const [followersState, setFollowers] = useState(0);

	const incFollowers = () => setFollowers(followersState + 1);
	const decFollowers = () => setFollowers(followersState - 1);

	const handleLogout = () => {
		setUser(null)
		localStorage.removeItem('user');
	}

	useEffect(() => setFollowers(profile?.followersCount), [profile]);

	return (
		<Wrapper>
			<img className="avatar" src={profile?.avatar} alt="avatar" />
			<div className="profile-info">
				<div className="profile-meta">
					<h2>{profile?.username}</h2>
					{profile?.isMe ? (
						<div className="options">
							<Button secondary onClick={() => history.push("/accounts/edit")}>
								Edit Profile
							</Button>
							<OptionsIcon onClick={handleLogout} />
						</div>
					) : (
						<Follow
							isFollowing={profile?.isFollowing}
							incFollowers={incFollowers}
							decFollowers={decFollowers}
							userId={profile?._id}
						/>
					)}
				</div>
				<div className="profile-stats">
					<span>{profile?.postCount} posts</span>
					<span>{followersState} followers</span>
					<span>{profile?.followingCount} following</span>
				</div>
				<div className="bio">
					<span className="bold">{profile?.fullname}</span>
					<p>{profile?.name}</p>
					<a href={profile?.website} target="_blank" rel="noopener noreferrer">
						{profile?.website}
					</a>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProfileHeader;
