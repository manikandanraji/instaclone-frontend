import React, { useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/GlobalStyle";
import Auth from "./components/Auth";
import Routing from './Routing';
import { UserContext } from './context/UserContext'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
	const { user } = useContext(UserContext)
	const { theme } = useContext(ThemeContext)

	return (
		<StyledThemeProvider theme={theme}>
			<GlobalStyle />
			{ user ? <Routing /> : <Auth /> }
		</StyledThemeProvider>
	);
};

export default App;
