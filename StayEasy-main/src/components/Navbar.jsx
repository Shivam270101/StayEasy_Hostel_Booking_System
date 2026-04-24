import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  LogOut,
  LogIn,
  UserPlus,
  Menu,
  Hotel
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const Navbar = ({
  isLoggedIn,
  setIsLoggedIn,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    setIsSidebarOpen(false);
    setIsLoggedIn(false);
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark glass-navbar ${scrolled ? 'scrolled' : ''}`}
      style={{
        marginLeft: isLoggedIn ? (isSidebarOpen ? "270px" : "60px") : "0px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <Hotel className="text-primary" size={28} />
          <span>StayEasy</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu className="text-white" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                <Info size={18} />
                <span>About Us</span>
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/home" className={`nav-link ${isActive('/home') ? 'active' : ''}`}>
                    <Home size={18} />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="nav-link btn-logout border-0"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`}>
                    <LogIn size={18} />
                    <span>Login</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className={`nav-link ${isActive('/signup') ? 'active' : ''}`}>
                    <UserPlus size={18} />
                    <span>Sign Up</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;