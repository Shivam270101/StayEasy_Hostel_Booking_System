import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion";
import logo from "../logo.svg";

const About = ({ isSidebarOpen, isLoggedIn }) => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        marginLeft: isLoggedIn ? (isSidebarOpen ? "270px" : "60px") : "0px",
        transition: "margin-left 0.3s ease-in-out",
        background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-5"
        >
          <img
            src={logo}
            alt="StayEasy Logo"
            style={{ width: "100px", height: "100px" }}
            className="mb-3"
          />
          <h1 className="display-4 fw-bold text-primary mb-3">About StayEasy</h1>
          <p className="lead text-muted">
            Your trusted platform for finding the perfect accommodation
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="row mb-5"
        >
          <div className="col-lg-6">
            <h2 className="h3 fw-bold mb-3">Our Mission</h2>
            <p className="text-muted">
              StayEasy is a location-based service designed to help students, travelers, and working professionals find the best hostels and paying guest accommodations nearby. We believe that finding a comfortable and safe place to stay should be effortless and stress-free.
            </p>
            <p className="text-muted">
              Our platform combines advanced location technology with user reviews and ratings to provide you with the most accurate and up-to-date information about available accommodations.
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "200px", height: "200px" }}
            >
              <span className="text-white fw-bold fs-1">🏠</span>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-5"
        >
          <h2 className="h3 fw-bold text-center mb-4">What We Offer</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <span className="text-primary fs-1">📍</span>
                  </div>
                  <h5 className="card-title fw-bold">Location-Based Search</h5>
                  <p className="card-text text-muted">
                    Find hostels and PGs near your current location or search by specific areas with our advanced mapping technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <span className="text-success fs-1">⭐</span>
                  </div>
                  <h5 className="card-title fw-bold">Reviews & Ratings</h5>
                  <p className="card-text text-muted">
                    Read authentic reviews from other users and check ratings to make informed decisions about your stay.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <span className="text-warning fs-1">🗺️</span>
                  </div>
                  <h5 className="card-title fw-bold">Route Navigation</h5>
                  <p className="card-text text-muted">
                    Get detailed directions and navigation assistance to reach your chosen accommodation easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="row mb-5"
        >
          <div className="col-lg-6 order-lg-2">
            <h2 className="h3 fw-bold mb-3">Why Choose StayEasy?</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <strong>User-Friendly Interface:</strong> Easy to navigate and use for everyone.
              </li>
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <strong>Verified Listings:</strong> All hostels and PGs are verified for quality and safety.
              </li>
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <strong>Real-Time Updates:</strong> Get the latest information about availability and prices.
              </li>
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <strong>Community Driven:</strong> Powered by user reviews and community feedback.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1 d-flex align-items-center justify-content-center">
            <div
              className="bg-success rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "200px", height: "200px" }}
            >
              <span className="text-white fw-bold fs-1">✨</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center"
        >
          <h2 className="h3 fw-bold mb-3">Ready to Find Your Perfect Stay?</h2>
          <p className="text-muted mb-4">
            Join thousands of satisfied users who have found their ideal accommodation through StayEasy.
          </p>
          <button className="btn btn-primary btn-lg rounded-pill px-5">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
