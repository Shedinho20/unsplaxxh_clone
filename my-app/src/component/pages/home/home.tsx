import React from "react";
import { HoriNavbar } from "../../organisms/horiNavbar/horiNavbar";
import SearchIcon from "@material-ui/icons/Search";

export const Home = () => {
  return (
    <div className="home">
      <HoriNavbar />
      <div className="contain">
        <img
          src={`https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&dpr=1&auto=format%2Ccompress&fit=crop&w=6199&h=594%201x,%20https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&dpr=2&auto=format%2Ccompress&fit=crop&w=6199&h=594%202x`}
          alt="banner"
        />
        <div className="content">
          <div className="lead_text">
            <h2>Unsplash</h2>
            <h3>The internet’s source of freely-usable images. </h3>
            <h3>Powered by creators everywhere.</h3>
          </div>

          <div className="input">
            <input placeholder="Search photos" type="search" autoCapitalize="none" spellCheck="false" />
            <SearchIcon className="search_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
