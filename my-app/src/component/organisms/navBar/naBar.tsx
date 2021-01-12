import logo from "../../../images/Unsplash_Symbol.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { NavLink as Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navBar">
      <Link to="/" className="linkG" activeClassName="">
        <div className="logo">
          <img src={logo} alt="unsplash_logo" />
          <div className="logo_text">
            <h3>Unsplaxh</h3>
            <h4>Photos for everyone</h4>
          </div>
        </div>
      </Link>
      <div className="search">
        <input placeholder="Search photos" type="search" autoCapitalize="none" spellCheck="false" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="nav_sec">
        <Link to="/t/explore" className="link" activeClassName="active2">
          Explore
        </Link>
        <div className="btns">
          <button className="btn ">Submit a photo</button>
          <div className="divider"></div>
          <button className="btn login">Login</button>
          <button className="btn join">Join free</button>
        </div>
      </div>
      <MenuIcon className="hambugerMenu" />
    </div>
  );
};
