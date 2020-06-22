import React from "react";
import { render } from "react-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { FeedProvider } from "./context/FeedContext";
import { ThemeProvider } from "./context/ThemeContext";

render(
  <UserProvider>
    <FeedProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FeedProvider>
  </UserProvider>,
  document.getElementById("root")
);
