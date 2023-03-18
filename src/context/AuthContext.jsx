import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserName());
  function getUserName() {
    return localStorage.getItem("user");
  }
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
