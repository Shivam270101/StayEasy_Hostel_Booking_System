import { Search } from "lucide-react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../logo.svg";

const Home = ({ isSidebarOpen, isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100 position-relative p-0"
      style={{
        marginLeft: isLoggedIn ? (isSidebarOpen ? "20px" : "70px") : "0px",
        transition: "margin-left 0.3s ease-in-out",
        background: "linear-gradient(to right, #1e293b, #4a5568)",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(0, 0, 0, 0.6)" }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container text-center text-white position-relative z-1"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4"
        >
          <img
            src={logo}
            alt="StayEasy Logo"
            style={{ width: "150px", height: "150px" }}
            className="mb-3"
          />
        </motion.div>

        <h1 className="display-3 fw-bold mb-3">Find Your Perfect Stay</h1>
        <p className="lead mb-4">
          Search hostels or PGs in your preferred location or near you.
        </p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="input-group mb-4 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <input
            type="text"
            placeholder="Search by location"
            className="form-control border-0 shadow-lg rounded-pill"
          />
          <button
            className="btn btn-danger rounded-pill px-4 shadow-lg d-flex align-items-center"
            onClick={() => navigate("/signup")}
          >
            <Search className="me-2" /> Search
          </button>
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p className="mb-4">
            Join thousands of students and travelers who trust StayEasy for their accommodation needs.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-outline-light rounded-pill px-4"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
            <button
              className="btn btn-primary rounded-pill px-4"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
