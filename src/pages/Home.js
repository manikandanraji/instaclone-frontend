import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Suggestions from "../components/Suggestions";
import Post from "../components/Post";
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

	useEffect(() => {
		getFeed().then(resp => setFeed(resp.data.data));
	}, [setFeed]);

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
