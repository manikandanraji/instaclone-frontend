import React, { useContext } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Auth from "./components/Auth";
import Routing from './Routing';
import { UserContext } from './context/UserContext'

const App = () => {
	const { user } = useContext(UserContext)

	return (
		<>
			<GlobalStyle />
			{ user ? <Routing /> : <Auth /> }
		</>
	);
};

export default App;
