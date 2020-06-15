import React from "react";
import styled from "styled-components";
import { HeartIcon, CommentIcon } from "./Icons";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1.5rem;
	margin-top: 3rem;
	cursor: pointer;

	img {
		width: 295px;
		height: 290px;
		object-fit: "cover";
		border-radius: 4px;
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
	}

	.container-overlay {
		position: relative;
	}

	.container-overlay:hover .overlay {
		display: block;
	}

	.overlay {
		border-radius: 4px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		width: 295px;
		height: 290px;
		z-index: 4;
		display: none;
	}

	.overlay-content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		color: #fff;
		font-weight: 500;
		font-size: 1.1rem;
	}

	svg {
		fill: #fff;
		position: relative;
		top: 4px;
	}

	span {
		display: flex;
		display: block;
		align-items: center;
		padding-right: 0.5rem;
		margin-right: 2rem;
	}
`;

const ProfilePreview = () => {
	const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<Wrapper>
			{posts.map(post => (
				<div className="container-overlay">
					<img key={post} src="https://source.unsplash.com/random" alt="post" />
					<div class="overlay">
						<div className="overlay-content">
							<span>
								<HeartIcon /> 12k
							</span>
							<span>
								<CommentIcon /> 10
							</span>
						</div>
					</div>
				</div>
			))}
		</Wrapper>
	);
};

export default ProfilePreview;
