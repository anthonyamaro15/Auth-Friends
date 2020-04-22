import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../protected/ProtectedRoute";
import Navbar from "./Navbar";
import MainForm from "./MainForm";
import FriendList from "./FriendList";

const MainApp = () => {
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <div className="MainApp">
      <Navbar logOut={logOut} />
      <Route exact path="/login" component={MainForm} />
      <PrivateRoute exact path="/friends" component={FriendList} />
    </div>
  );
};

export default MainApp;
