import { createContext, useContext, useState, useEffect } from "react";
import { setBearerToken } from "../services/api";

interface AuthContextProps {
  auth?: {
    state: string;
    access_token: string;
    token_type: string;
    expires_in: string;
    scope: string;
  };
  setAuth: (value?: AuthContextProps["auth"]) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children?: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuthState] = useState<AuthContextProps["auth"]>();

  useEffect(init, []);

  function init() {
    getAuthLocally();
  }

  function getAuthLocally() {
    let auth: any = localStorage.getItem("auth");
    if (!auth) return undefined;
    auth = JSON.parse(auth);
    setBearerToken(auth["access_token"]);
    setAuthState(auth);
  }

  function setAuth(auth?: AuthContextProps["auth"]) {
    setAuthState(auth);

    if (!auth) {
      setBearerToken(undefined);
      return localStorage.removeItem("auth");
    }

    setBearerToken(auth["access_token"]);
    localStorage.setItem("auth", JSON.stringify(auth));
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
