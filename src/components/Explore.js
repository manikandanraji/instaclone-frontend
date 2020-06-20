import React, { useState, useEffect } from "react";
import ProfilePreview from "./ProfilePreview";
import PostPreview from "./PostPreview";
import { getUsers, getPosts } from "../services/api";

const Explore = () => {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getUsers().then(response => setUsers([]));
		getPosts().then(response => setPosts(response.data.data));
	}, []);

	return (
		<>
			<div style={{ marginTop: "2.3rem" }}>
				<h3>Explore</h3>
				<PostPreview posts={posts} />
			</div>
		</>
	);
};

export default Explore;
