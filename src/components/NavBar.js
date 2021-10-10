import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/ProductList">ProductList</Link>
    </header>
  );
}

export default NavBar;
