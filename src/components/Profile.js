import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PostPreview from "./PostPreview";
import ProfileHeader from "./ProfileHeader";
import { PostIcon, SavedIcon } from "./Icons";
import { getProfile } from '../services/api';

const Wrapper = styled.div`
	.profile-tab {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 1.4rem 0;
	}

	.profile-tab div {
		display: flex;
		cursor: pointer;
		margin-right: 3rem;
	}

	.profile-tab span {
		padding-left: 0.3rem;
	}

	.profile-tab svg {
		height: 24px;
		width: 24px;
	}

	hr {
		border: 0.5px solid ${props => props.theme.borderColor};
	}

`;

const Profile = () => {
	const [tab, setTab] = useState('POSTS')

	const { username } = useParams();
	const [profile, setProfile] = useState({})

	useEffect(() => {
		getProfile({ username }).then(res => setProfile(res.data.data))
	}, [username])

	return (
		<Wrapper>
			<ProfileHeader profile={profile}/>
			<hr/>

			<div className="profile-tab">
				<div style={{ fontWeight: tab === "POSTS" ? '500' : '' }} onClick={() => setTab('POSTS')}>
					<PostIcon />
					<span>Posts</span>
				</div>
				<div style={{ fontWeight: tab === "SAVED" ? '500' : '' }}onClick={() => setTab('SAVED')}>
					<SavedIcon />
					<span>Saved</span>
				</div>
			</div>

			{ tab === 'POSTS' && <PostPreview posts={profile?.posts}/> }
			{ tab === 'SAVED' && <PostPreview posts={profile?.savedPosts}/> }
		</Wrapper>
	);
};

export default Profile;
