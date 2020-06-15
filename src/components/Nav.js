import React from "react";
import styled from "styled-components";
import navlogo from "../assets/navlogo.png";
import {
	HomeIcon,
	InboxIcon,
	ExploreIcon,
	HeartIcon,
	DefaultAvatar
} from "./Icons";

const NavWrapper = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	background-color: #fff;
	border-bottom: 1px solid #dbdbdb;
	padding: 1rem 0;
	z-index: 10;

	.nav-logo {
		position: relative;
		top: 2px;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		width: 930px;
	}

	input {
		padding: 0.4rem 0.6rem;
		background: #fafafa;
		border: 1px solid #dbdbdb;
		font-family: "Fira Sans", sans-serif;
		font-size: 1rem;
		border-radius: 4px;
	}

	ul {
		display: flex;
		list-style-type: none;
	}

	li {
		margin-left: 1rem;
	}
`;

const Nav = () => {
	return (
		<NavWrapper>
			<nav>
				<img className="nav-logo" src={navlogo} alt="logo" />
				<input type="text" placeholder="Search" />
				<ul>
					<li>
						<HomeIcon />
					</li>
					<li>
						<InboxIcon />
					</li>
					<li>
						<ExploreIcon />
					</li>
					<li>
						<HeartIcon />
					</li>
					<li>
						<DefaultAvatar />
					</li>
				</ul>
			</nav>
		</NavWrapper>
	);
};

export default Nav;
