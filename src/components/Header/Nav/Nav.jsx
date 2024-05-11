import React from "react";
import { Link } from 'react-router-dom';
import home from "../../../assets/casa.png";
import login from "../../../assets/usuario.png";
import "./Nav.css";

const Nav = () => {

  return(
    <nav className="nav">
      <ul>
        <li><Link to='/' className="linkHome"><img src={home} alt="home" /></Link></li>
        <li><Link to='/form' className="linkLogin"><img src={login} alt="login" /></Link></li>
      </ul>
    </nav>
  );

};

export default Nav;
