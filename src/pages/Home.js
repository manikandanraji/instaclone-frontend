import React, { useState, useEffect } from "react";
import Suggestions from "../components/Suggestions";
import Post from "../components/Post";
import { getFeed } from "../services/api";

const Home = () => {
	const [feed, setFeed] = useState([]);

	useEffect(() => {
		getFeed().then(resp => setFeed(resp.data.data));
	}, []);

	return (
		<>
			<div>
				{feed.map(post => (
					<Post key={post._id} post={post} />
				))}
			</div>
			<Suggestions />
		</>
	);
};

export default Home;
