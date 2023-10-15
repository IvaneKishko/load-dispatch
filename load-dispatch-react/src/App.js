import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Landing from "./landing/pages/Landing";
import Load from "./loads/components/Load";
import Loads from "./loads/pages/Loads";
import NewLoad from "./loads/pages/NewLoad";
import UpdateLoad from "./loads/pages/UpdateLoad";
import UserLoads from "./loads/pages/UserLoads";
import Auth from "./users/pages/Auth";
import User from "./users/pages/User";
import { AuthContext } from "./shared/context/auth.context";
// context da ak una shevcvalo loginebi
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/:userId/loads" element={<UserLoads />} />
        <Route exact path="/loads" element={<Loads />} />
        <Route exact path="/loads/new" element={<NewLoad />} />
        <Route exact path="/loads/:loadId/edit" element={<UpdateLoad />} />
        <Route exact path="/loads/:loadId" element={<Load />} />
        <Route exact path="/users/:userId" element={<User />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Routes>{routes}</Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
