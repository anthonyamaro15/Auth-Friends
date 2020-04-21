import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriend from "./AddFriends";

// import { formReducer } from "../reducers/formReducer";

const FriendList = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.formReducer);
  const { data } = reducer;
  console.log(data);

  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        //   console.log("friends list here ", res.data);
        dispatch({ type: "SAVING_DATA", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERRORS", payload: err });
      });
  }, []);
  return (
    <div className="FriendList">
      <AddFriend />
      <h1>See Your Friends</h1>
      <div className="list">
        {data.map((fnd) => (
          <Friend key={fnd.id} obj={fnd} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
