import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = ({ isLoggedIn, setIsLoggedIn, isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    setIsSidebarOpen(false);
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/");
  };

  const closeMenu = () => setMenuOpen(false);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    .nb-root {
      font-family: 'Inter', sans-serif;
      background: #0F1C2E !important;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      transition: margin-left 0.3s ease-in-out;
    }

    /* Brand */
    .nb-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none !important;
    }
    .nb-brand-icon {
      width: 30px; height: 30px;
      background: #5B5FEF;
      border-radius: 7px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .nb-brand-icon svg { width: 16px; height: 16px; stroke: #fff; fill: none; stroke-width: 2; stroke-linecap: round; }
    .nb-brand-name {
      font-size: 1.05rem;
      font-weight: 700;
      color: #fff !important;
      letter-spacing: -0.3px;
    }

    /* Nav links */
    .nb-link {
      font-size: 0.875rem;
      font-weight: 500;
      color: rgba(255,255,255,0.65) !important;
      text-decoration: none !important;
      padding: 6px 12px !important;
      border-radius: 6px;
      transition: color 0.15s, background 0.15s;
    }
    .nb-link:hover {
      color: #fff !important;
      background: rgba(255,255,255,0.07);
    }

    /* Logout — same style as nav link but as a button */
    .nb-btn-ghost {
      font-size: 0.875rem;
      font-weight: 500;
      color: rgba(255,255,255,0.65) !important;
      background: none;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      transition: color 0.15s, background 0.15s;
      line-height: 1.5;
    }
    .nb-btn-ghost:hover {
      color: #fff !important;
      background: rgba(255,255,255,0.07);
    }

    /* Sign Up CTA button */
    .nb-btn-cta {
      font-size: 0.875rem;
      font-weight: 600;
      color: #fff !important;
      background: #5B5FEF;
      border: none;
      padding: 6px 16px;
      border-radius: 6px;
      text-decoration: none !important;
      transition: background 0.15s, box-shadow 0.15s;
    }
    .nb-btn-cta:hover {
      background: #4B4FD9;
      box-shadow: 0 3px 12px rgba(91,95,239,0.4);
      color: #fff !important;
    }

    /* Divider between nav groups */
    .nb-divider {
      width: 1px;
      height: 18px;
      background: rgba(255,255,255,0.12);
      margin: 0 4px;
      align-self: center;
    }

    /* Toggler */
    .nb-toggler {
      border: 1px solid rgba(255,255,255,0.2) !important;
      padding: 4px 8px !important;
      border-radius: 6px;
    }
    .nb-toggler:focus { box-shadow: 0 0 0 2px rgba(91,95,239,0.4) !important; }
    .nb-toggler-icon {
      display: flex; flex-direction: column; gap: 4px; padding: 1px;
    }
    .nb-toggler-icon span {
      display: block; height: 2px; width: 18px;
      background: rgba(255,255,255,0.8); border-radius: 2px;
      transition: all 0.2s;
    }

    /* Mobile collapse */
    @media (max-width: 991px) {
      .nb-collapse {
        padding: 12px 0 8px;
        border-top: 1px solid rgba(255,255,255,0.07);
        margin-top: 10px;
      }
      .nb-divider { display: none; }
      .nb-link, .nb-btn-ghost { display: block; width: 100%; text-align: left; margin-bottom: 2px; }
      .nb-btn-cta { display: inline-block; margin-top: 4px; }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <nav
        className="nb-root navbar navbar-expand-lg px-3 px-lg-4"
        style={{
          marginLeft: isLoggedIn ? (isSidebarOpen ? "270px" : "60px") : "0px",
        }}
      >
        <div className="container-fluid px-0">

          {/* Brand */}
          <Link to="/" className="nb-brand" onClick={closeMenu}>
            <div className="nb-brand-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="nb-brand-name">StayEasy</span>
          </Link>

          {/* Mobile toggler */}
          <button
            className="navbar-toggler nb-toggler border-0"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <div className="nb-toggler-icon">
              <span />
              <span />
              <span />
            </div>
          </button>

          {/* Nav links */}
          <div className={`navbar-collapse${menuOpen ? " show" : " collapse"} nb-collapse`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">

              <li className="nav-item">
                <Link to="/about" className="nb-link" onClick={closeMenu}>About</Link>
              </li>

              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link to="/home" className="nb-link" onClick={closeMenu}>Home</Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <div className="nb-divider d-none d-lg-block" />
                  </li>
                  <li className="nav-item">
                    <button className="nb-btn-ghost" onClick={handleLogout}>
                      Log out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item d-flex align-items-center">
                    <div className="nb-divider d-none d-lg-block" />
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nb-link" onClick={closeMenu}>Log in</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nb-btn-cta" onClick={closeMenu}>Sign up</Link>
                  </li>
                </>
              )}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;