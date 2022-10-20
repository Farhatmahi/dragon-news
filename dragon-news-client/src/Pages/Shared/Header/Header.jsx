import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
    </div>
  );
};

export default Header;
