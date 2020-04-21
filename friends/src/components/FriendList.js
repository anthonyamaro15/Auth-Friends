import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriend from "./AddFriends";
import { bindActionCreators } from "redux";

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

  const removeFriend = (friend) => {
    dispatch({ type: "REMOVING_FRIEND" });
    axiosWithAuth()
      .delete(`api/friends/${friend.id}`)
      .then((res) => {
        dispatch({ type: "REMOVED_FRIEND", payload: res.data });
        console.log("response here ", res);
      })
      .catch((err) => {
        dispatch({ type: "ERROR_REMOVED", payload: err });
      });
  };
  return (
    <div className="FriendList">
      <AddFriend />
      <h1>See Your Friends</h1>
      <div className="list">
        {data.map((fnd) => (
          <Friend key={fnd.id} obj={fnd} removeFriend={removeFriend} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
