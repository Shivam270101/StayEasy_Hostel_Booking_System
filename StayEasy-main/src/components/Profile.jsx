import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import AboutUs from "./AboutUs";

function Dashboard() {
  const [activePage, setActivePage] = useState("about");

  return (
    <div style={{ display: "flex" }}>
      
      {/* LEFT FIXED SIDEBAR */}
      <Sidebar onMenuClick={setActivePage} />

      {/* RIGHT CONTENT AREA */}
      <div style={{
        flexGrow: 1,
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh"
      }}>
        {activePage === "profile" && <Profile />}
        {activePage === "about" && <AboutUs />}
      </div>

    </div>
  );
}

export default Dashboard;
