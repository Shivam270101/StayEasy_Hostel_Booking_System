import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home, MapPin, Shield } from "lucide-react";

function Welcome() {
  return (
    <div className="welcome-container d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 d-inline-block p-3 rounded-circle bg-primary bg-opacity-10 text-primary"
        >
          <Home size={48} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="display-3 fw-bold mb-3 text-dark"
        >
          Welcome to <span className="text-primary">StayEasy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lead text-muted mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Experience co-living like never before. Find your perfect stay with ease,
          security, and a vibrant community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="d-flex justify-content-center gap-4 mb-5"
        >
          <div className="d-flex align-items-center gap-2 text-secondary">
            <MapPin size={20} className="text-primary" />
            <span>Prime Locations</span>
          </div>
          <div className="d-flex align-items-center gap-2 text-secondary">
            <Shield size={20} className="text-primary" />
            <span>Secure Bookings</span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg d-inline-flex align-items-center gap-2 fw-bold"
          onClick={() => (window.location.href = "/")}
        >
          Get Started <ChevronRight size={20} />
        </motion.button>
      </div>
    </div>
  );
}

export default Welcome;
