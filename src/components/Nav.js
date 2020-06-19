import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import navlogo from "../assets/navlogo.png";
import { HomeIcon, InboxIcon, ExploreIcon, HeartIcon } from "./Icons";

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
		top: 6px;
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
		position: relative;
		top: 3px;
		list-style-type: none;
	}

	li {
		margin-left: 1rem;
	}
`;

const Nav = () => {
	const { user } = useContext(UserContext);
	return (
		<NavWrapper>
			<nav>
				<Link to="/">
					<img className="nav-logo" src={navlogo} alt="logo" />
				</Link>
				<input type="text" placeholder="Search" />
				<ul>
					<li>
						<Link to="/">
							<HomeIcon />
						</Link>
					</li>
					<li>
						<InboxIcon />
					</li>
					<li>
						<Link to="/explore">
							<ExploreIcon />
						</Link>
					</li>
					<li>
						<HeartIcon />
					</li>
					<li>
						<Link to="/manikandanraji">
							<img
								style={{ width: "24px", height: "24px", borderRadius: "12px" }}
								src={user.avatar}
								alt="avatar"
							/>
						</Link>
					</li>
				</ul>
			</nav>
		</NavWrapper>
	);
};

export default Nav;
