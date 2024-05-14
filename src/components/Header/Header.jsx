import React from "react";
import Nav from "./Nav/Nav.jsx";
import Search from "./Search/Search.jsx";

const Header = () => {
  return( 
      <header className="header">
        <h1>SpotifyApp</h1>
        <Search />
        <Nav />
      </header>
  );
};

export default Header;