import React from "react";
// import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
// import Login from './components/Login';
// import Signup from "./components/Signup";
import Container from "./styles/Container";
import Nav from "./components/Nav";
import EditProfile from "./components/EditProfile";
// import Profile from "./components/Profile";
// import DetailedPost from "./components/DetailedPost";
// import Post from "./components/Post";
// import ProfilePreview from "./components/ProfilePreview";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Nav />
			<Container>
				<EditProfile />
			</Container>
		</>
	);
};

export default App;
