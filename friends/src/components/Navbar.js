import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const Navbar = () => {
  const { url, path } = useRouteMatch();
  console.log("paht here ", path);
  return (
    <div className="Navbar">
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/friends">FriendList</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
