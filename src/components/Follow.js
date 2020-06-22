import React, { useEffect, useState } from "react";
import Button from "../styles/Button";
import { follow } from "../services/api";

const Follow = ({ nobtn, isFollowing, incFollowers, decFollowers, userId }) => {
	const [followingState, setFollowingState] = useState(isFollowing);

	useEffect(() => setFollowingState(isFollowing), [isFollowing]);

	const handleFollow = () => {
		if (followingState) {
			setFollowingState(false);
			if (decFollowers) {
				decFollowers();
			}
			follow({ url: `/users/${userId}/unfollow` });
		} else {
			setFollowingState(true);
			if (incFollowers) {
				incFollowers();
			}
			follow({ url: `/users/${userId}/follow` });
		}
	};

	if (followingState) {
		return (
			<>
				{nobtn ? (
					<span
						style={{ color: "#262626" }}
						className="pointer"
						onClick={() => handleFollow()}
					>
						Following
					</span>
				) : (
					<Button onClick={() => handleFollow()}>Following</Button>
				)}
			</>
		);
	} else {
		return (
			<>
				{nobtn ? (
					<span className="pointer" onClick={() => handleFollow()}>
						Follow
					</span>
				) : (
					<Button onClick={() => handleFollow()}>Follow</Button>
				)}
			</>
		);
	}
};

export default Follow;
