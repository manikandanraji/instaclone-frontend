import React, { useState, useEffect } from "react";
import PostPreview from "./PostPreview";
import Loader from "../components/Loader";
import { getPosts } from "../services/api";

const Explore = () => {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts().then(response => {
			setPosts(response.data.data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<div style={{ marginTop: "2.3rem" }}>
				<h2>Explore</h2>
				<PostPreview posts={posts} />
			</div>
		</>
	);
};

export default Explore;
