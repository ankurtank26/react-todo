import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo App</h1>
      <Link style={linkStyle} to="/">
        Todo List
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/add">
        Add Todo
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  width: "100%"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default Header;
