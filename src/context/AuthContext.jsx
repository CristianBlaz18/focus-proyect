import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem("token", userToken); // Persistencia opcional
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {console.log("AuthProvider activo")}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
  };