import React, { useState, useEffect } from "react";
import ProfilePreview from "./ProfilePreview";
import PostPreview from "./PostPreview";
import { getUsers, getPosts } from "../services/api";

const Explore = () => {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getUsers().then(response => setUsers(response.data.data));
		getPosts().then(response => setPosts(response.data.data));
	}, []);

	return (
		<>
			<h2>User Suggestions</h2>
			<div style={{ display: "flex", marginTop: "0.8rem" }}>
				{users.map(user => (
					<ProfilePreview key={user.username} user={user} />
				))}
			</div>
			<div style={{ marginTop: "3rem" }}>
				<h2>Explore</h2>
				<PostPreview posts={posts} />
			</div>
		</>
	);
};

export default Explore;
