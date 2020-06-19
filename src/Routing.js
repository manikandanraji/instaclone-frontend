import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import DetailedPost from "./components/DetailedPost";
import EditProfile from "./components/EditProfile";
import Container from "./styles/Container";

const Routing = () => {
	return (
		<Router>
			<Nav />
			<Container>
				<Switch>
	       <Route path="/explore" component={Explore} />
					<Route path="/p/:postId" component={DetailedPost} />
					<Route path="/accounts/edit" component={EditProfile} />
					<Route path="/:username" component={Profile} />
					<Route path="/" component={Home} />
				</Switch>
			</Container>
		</Router>
	);
};

export default Routing;
