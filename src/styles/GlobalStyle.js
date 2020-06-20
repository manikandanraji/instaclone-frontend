import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		font-family: 'Fira Sans', sans-serif;
		font-size: 1rem;
		line-height: 1.7;
		background: ${props => props.theme.bg};
		color: ${props => props.theme.primaryColor};
		overflow-x: hidden;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: ${props => props.theme.blue};
		cursor: pointer;
	}

	.pointer {
		cursor: pointer;
	}

	button, svg {
	  cursor: pointer;
	}

	.bold {
		font-weight: 500;
	}

	*:focus {
	  outline: none;
	}
`;

export default GlobalStyle;
