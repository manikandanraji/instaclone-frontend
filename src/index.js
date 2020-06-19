import React from "react";
import { render } from "react-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

render(
	<UserProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</UserProvider>,
	document.getElementById("root")
);
