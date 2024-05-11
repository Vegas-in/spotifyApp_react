import React from "react";
import Nav from "./Nav/Nav.jsx";
import Search from "./Search/Search.jsx";
import "./Header.css";

const Header = () => {
  return( 
      <header className="header">
        <h1>SpotifyApp</h1>
        <Nav />
        <Search />
      </header>
  );
};

export default Header;