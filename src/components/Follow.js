import React, { useEffect, useState } from "react";
import Button from "../styles/Button";
import { follow } from '../services/api';

const Follow = ({ isFollowing, incFollowers, decFollowers, userId }) => {
	const [followingState, setFollowingState] = useState(isFollowing);

	useEffect(() => setFollowingState(isFollowing), [isFollowing])

	const handleFollow = () => {
		if(followingState) {
			setFollowingState(false)
			decFollowers()
			follow({ url: `/users/${userId}/unfollow` }).then(res => console.log(res.data));
		} else {
			setFollowingState(true)
			incFollowers()
			follow({ url: `/users/${userId}/follow` }).then(res => console.log(res.data));
		}
	}

	return (
		<>
			{followingState ? (
				<Button onClick={() => handleFollow()}>Following</Button>
			) : (
				<Button onClick={() => handleFollow()}>Follow</Button>
			)}
		</>
	);
};

export default Follow;
