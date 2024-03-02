import React, { createContext, useState } from "react";

export const AuthContext = createContext("");

const UserContext = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
