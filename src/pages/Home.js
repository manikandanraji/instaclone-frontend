import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Suggestions from "../components/Suggestions";
import NoFeedSuggestions from "../components/NoFeedSuggestions";
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

	const logoutUser = () => {
		setFeed(null);
		localStorage.removeItem("user");
		window.location = "/";
	};

	useEffect(() => {
		getFeed()
			.then(resp => {
				setFeed(resp.data.data);
				setLoading(false);
			})
			.catch(err => {
				logoutUser();
			});
	}, [setFeed]);

	if (loading) {
		return <Loader />;
	}

	return (
		<Wrapper>
			{feed.length > 0 ? (
				<>
					<div className="home">
						{feed.map(post => (
							<Post key={post._id} post={post} />
						))}
					</div>
					<Suggestions />{" "}
				</>
			) : (
				<NoFeedSuggestions />
			)}
		</Wrapper>
	);
};

export default Home;
