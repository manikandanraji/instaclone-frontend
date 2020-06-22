import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Auth from "./components/Auth";
import Routing from "./Routing";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} closeButton={false} />
      {user ? <Routing /> : <Auth />}
    </StyledThemeProvider>
  );
};

export default App;
