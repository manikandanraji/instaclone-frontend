import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Suggestions from "../components/Suggestions";
import Post from "../components/Post";
import Loader from "../components/Loader";
import { FeedContext } from "../context/FeedContext";
import { getFeed } from "../services/api";

const Wrapper = styled.div`
	@media screen and (max-width: 1040px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Home = () => {
	const { feed, setFeed } = useContext(FeedContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getFeed().then(resp => {
			setFeed(resp.data.data);
			setLoading(false);
		});
	}, [setFeed]);

	if (loading) {
		return <Loader />;
	}

	return (
		<Wrapper>
			<div className="home">
				{feed.map(post => (
					<Post key={post._id} post={post} />
				))}
			</div>
			<Suggestions />
		</Wrapper>
	);
};

export default Home;
