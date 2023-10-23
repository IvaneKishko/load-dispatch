import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  companyName: null,
  token: null,
  login: () => {},
  logout: () => {},
});
