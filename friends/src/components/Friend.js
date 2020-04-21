import React from "react";

const Friend = ({ obj }) => {
  return (
    <div className="Friends">
      <h3>{obj.name}</h3>
      <p>{obj.age}</p>
      <p>{obj.email}</p>
    </div>
  );
};

export default Friend;
