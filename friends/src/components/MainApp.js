import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PrivateRoute from "../protected/ProtectedRoute";
import MainForm from "./MainForm";

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));

  const { data } = reducer.formReducer;
  //   console.log(data);
  return (
    <div className="MainForm">
      <h1>MainApp</h1>
      <MainForm />
    </div>
  );
};

export default MainApp;
