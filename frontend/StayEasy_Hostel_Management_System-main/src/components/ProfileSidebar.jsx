import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaBars, FaUser, FaSearch, FaCalendarCheck, FaBuilding, FaPlus } from "react-icons/fa";

// Exact routing configurations with icons for your two specific roles
const navConfig = {
  ROLE_USER: [
    { to: "/profile", label: "Profile Summary", icon: FaUser },
    { to: "/search_hostel", label: "Hostels Listed", icon: FaSearch },
    { to: "/my-bookings", label: "My Bookings", icon: FaCalendarCheck },
  ],
  ROLE_OWNER: [
    { to: "/profile", label: "Profile Summary", icon: FaUser },
    { to: "/add_hostel", label: "Add Hostel Details", icon: FaPlus },
    { to: "/manage-bookings", label: "Manage Bookings", icon: FaBuilding }
  ]
};

const ProfileSidebar = ({ setIsSidebarOpen, userRole = "ROLE_USER" }) => {
  const [showsidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showsidebar);
    setIsSidebarOpen(!showsidebar);
  };

  // Fetch the correct links based on the role passed in as a prop
  const activeLinks = navConfig[userRole] || [];

  // Dynamically set the title based on the role
  const sidebarTitle = userRole === "ROLE_OWNER" ? "Owner Dashboard" : "User Profile";

  return (
    <div
      style={{
        width: showsidebar ? "250px" : "60px",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        background: "#5B5FEF", // Specified background color
        padding: "10px",
        transition: "width 0.3s ease-in-out",
        overflowX: "hidden",
        boxShadow: showsidebar ? "2px 0px 10px rgba(0,0,0,0.2)" : "none",
        zIndex: 1000,
        color: "#ffffff", // Default text color for the sidebar
      }}
    >
      {/* Hamburger Menu Icon */}
      <button
        onClick={toggleSidebar}
        className="btn btn-outline-light"
        style={{ marginBottom: "10px", display: "block" }}
        aria-label="Toggle Sidebar"
      >
        <FaBars />
      </button>

      {/* Sidebar Content */}
      {showsidebar && (
        <div style={{ marginTop: "20px" }}>
          <h5 className="text-white mb-4">{sidebarTitle}</h5>
          <Nav className="flex-column gap-2">
            {activeLinks.map((link, index) => (
              <Nav.Link
                as={Link}
                to={link.to}
                key={index}
                className="text-white rounded"
                style={{
                  padding: "10px 15px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <link.icon style={{ marginRight: "10px" }} />
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </div>
      )}
    </div>
  );
};

export default ProfileSidebar;