import React from "react";
import './header.css'
import SearchIcon from "@mui/icons-material/Search";
import LinkedIn_logo from '../assets/LinkedIn_logo.png'

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_search">
            <img src={LinkedIn_logo} alt="" />
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right"></div>
    </div>
  );
}

export default Header;
