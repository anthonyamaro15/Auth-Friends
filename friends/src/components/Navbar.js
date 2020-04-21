import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
