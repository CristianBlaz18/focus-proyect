import { useState } from "react";
import { loginUser } from "../lib/apiLogin";


export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      return data; 
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    error,
    loading,
  };
};