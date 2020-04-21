import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PrivateRoute from "../protected/ProtectedRoute";
import Navbar from "./Navbar";
import MainForm from "./MainForm";
import FriendList from "./FriendList";

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));

  const { data } = reducer.formReducer;
  //   console.log("got data", data);
  return (
    <div className="MainForm">
      <Navbar />
      <Route exact path="/login" component={MainForm} />
      <PrivateRoute exact path="/friends" component={FriendList} />
    </div>
  );
};

export default MainApp;
