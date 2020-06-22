import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const localSt = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localSt ? localSt : null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
