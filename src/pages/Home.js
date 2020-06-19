import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Suggestions from "../components/Suggestions";
import Post from "../components/Post";
import { getFeed } from '../services/api';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 615px 1fr;
	grid-gap: 2.5rem;
`;

const Home = () => {
	const [feed, setFeed] = useState([]);

	useEffect(() => {
		getFeed().then(resp=> setFeed(resp.data.data))
	}, [])

	return (
		<Wrapper>
			<div className="posts">
			{feed.map(post => <Post key={post._id} post={post}/>)}
			</div>
			<Suggestions />
		</Wrapper>
	);
};

export default Home;
