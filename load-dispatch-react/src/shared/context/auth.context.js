import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  role: null,
  companyName: null,
  token: null,
  login: () => {},
  logout: () => {},
});
