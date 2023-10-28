import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";
import { AuthContext } from "../../context/auth.context";
import { useAuth } from "../../../shared/hooks/auth-hook";

const NavLinks = () => {
  const auth = useContext(AuthContext);
  const { token, login, logout, userId, companyName, role } = useAuth();

  console.log(auth.role, role, 'ss');

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && auth.role === "transporter" && (
        <li>
          <NavLink to="/loads" exact>
            ALL LOADS
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && auth.role === "client" && (
        <li>
          <NavLink to={`/${auth.userId}/loads`}>MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && auth.role === "client" && (
        <li>
          <NavLink to="/loads/new">ADD LOAD</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
