import React, { useContext, useEffect } from "react";
import Suggestions from "../components/Suggestions";
import Post from "../components/Post";
import { FeedContext } from "../context/FeedContext";
import { getFeed } from "../services/api";

const Home = () => {
	const { feed, setFeed } = useContext(FeedContext);

	useEffect(() => {
		getFeed().then(resp => setFeed(resp.data.data));
	}, [setFeed]);

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
