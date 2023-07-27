import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LinkedIn_logo from "../assets/LinkedIn_logo.png";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={LinkedIn_logo} alt="" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title = "Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title = "My Network"/>

      </div>
    </div>
  );
}

export default Header;
