import React from "react";
import styled from 'styled-components';
import GlobalStyle from "./styles/GlobalStyle";
// import Login from './components/Login';
// import Signup from './components/Signup';
import Nav from "./components/Nav";
import Post from "./components/Post";

const Container = styled.div`
	width: 930px;
	margin: 0 auto;
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Nav />
			<Container>
				<Post />
			</Container>
		</>
	);
};

export default App;
