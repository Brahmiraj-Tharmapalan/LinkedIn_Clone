import React from "react";
import "./sidebar.css";
import { Avatar } from "@mui/material";
import background_pic from "../assets/background_pic.png";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={background_pic} alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Raj</h2>
        <h4>Raj@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <div className="sidebar_statNumber">363</div>
        </div>
        <div className="sidebar_stat">
          <p>Impression of your post</p>
          <div className="sidebar_statNumber">569</div>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
