import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface IUserLogin {
  username: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(user: IUserLogin): Promise<boolean>;
  logout(): void;
}
interface IAuthContext {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<IAuthContext> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem("@App:user");
    const storagedToken = sessionStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));

      axios.defaults.headers.Authorization = `Token ${storagedToken}`;
    }
  }, []);

  async function signIn(userData: IUserLogin) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        userData
      );

      setUser(response.data.user);
      axios.defaults.headers.Authorization = `Token ${response.data.token}`;

      sessionStorage.setItem("@app:user", JSON.stringify(response.data.user));
      sessionStorage.setItem("@app:token", response.data.token);
      return true;
    } catch (err) {
      return false;
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, signIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
