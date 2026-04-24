import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ProfileSidebar = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        width: isOpen ? "250px" : "70px",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        backgroundColor: "#f8f9fa",
        borderRight: "1px solid #ddd",
        transition: "width 0.3s ease-in-out",
        padding: "10px",
        overflow: "hidden",
        boxShadow: "2px 0 5px rgba(0,0,0,0.05)",
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="btn btn-light"
        style={{
          width: "100%",
          marginBottom: "15px",
          fontSize: "20px",
        }}
      >
        ☰
      </button>

      {/* Sidebar Items */}
      {isOpen && (
        <>
          <h5 style={{ marginLeft: "5px", marginBottom: "15px" }}>
            User Profile
          </h5>

          <Nav className="flex-column">

            <Nav.Link
              as={Link}
              to="/profile"
              onClick={() => onMenuClick("profile")}
            >
              Profile
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/search_hostel"
              onClick={() => onMenuClick("hostels")}
            >
              Hostels
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/my-bookings"
              onClick={() => onMenuClick("my-bookings")}
            >
              My Booking
            </Nav.Link>

            {sessionStorage.getItem("role") === "ROLE_OWNER" && (
              <>
                <Nav.Link
                  as={Link}
                  to="/manage-bookings"
                  onClick={() => onMenuClick("manage-bookings")}
                >
                  Manage My Hostel Booking
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/add_hostel"
                  onClick={() => onMenuClick("add-hostel")}
                >
                  Add Your Hostel
                </Nav.Link>
              </>
            )}
          </Nav>
        </>
      )}
    </div>
  );
};

export default ProfileSidebar;
