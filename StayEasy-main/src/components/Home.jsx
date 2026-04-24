import { Search, MapPin, ChevronRight, Building, Home as HomeIcon } from "lucide-react";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion";
import homeBg from "../assets/images/home_bg.png";
import "./Home.css";

const sharingOptions = [
  { id: 1, type: "3 Sharing", location: "Pune", price: 4000 },
  { id: 2, type: "2 Sharing", location: "Pune", price: 5500 },
  { id: 3, type: "1 Sharing", location: "Pune", price: 8000 },
];

const Home = ({ isSidebarOpen, isLoggedIn }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [category, setCategory] = useState("all");
  const [options, setOptions] = useState(sharingOptions);

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`Your location: ${latitude}, ${longitude}`);
        },
        () => {
          alert("Unable to fetch location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSearch = () => {
    const filtered = sharingOptions.filter((opt) =>
      opt.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setOptions(filtered);
  };

  return (
    <div
      className="home-page min-vh-100 position-relative home-container"
      style={{
        marginLeft: isLoggedIn ? (isSidebarOpen ? "250px" : "80px") : "0px",
        transition: "margin-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="container text-center text-white z-1"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="badge rounded-pill bg-primary bg-opacity-25 text-primary mb-3 px-3 py-2 border border-primary border-opacity-50"
        >
          StayEasy Apartments & Hostels
        </motion.span>

        <h1 className="display-2 fw-black mb-3 tracking-tight">
          Find Your <span className="text-primary">Perfect</span> Home
        </h1>
        <p className="fs-4 mb-5 opacity-90 fw-light">
          Premium stays for students & professionals in the heart of the city.
        </p>

        {/* Search Bar Pro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="search-bar-pro mx-auto"
        >
          <div className="search-field">
            <MapPin className="text-primary" size={20} />
            <input
              type="text"
              placeholder="Enter location (e.g. Pune)"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="search-field">
            <Building className="text-primary" size={20} />
            <select
              className="search-input search-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="hostel">Hostels</option>
              <option value="pg">Paying Guest (PG)</option>
              <option value="apartment">Apartments</option>
            </select>
          </div>

          <button
            className="btn-near-me"
            onClick={handleCurrentLocation}
          >
            <MapPin size={18} />
            <span>Near Me</span>
          </button>

          <button
            className="btn-search-pro"
            onClick={handleSearch}
          >
            <Search size={18} />
            <span>Search</span>
          </button>
        </motion.div>

        {/* Sharing Options Cards */}
        <div className="row g-4 justify-content-center mt-4">
          {options.map((opt, idx) => (
            <div key={opt.id} className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="card h-100 border-0 shadow-lg overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.98)",
                  borderRadius: "24px",
                }}
              >
                <div className="card-body p-4 text-dark text-start">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 fw-semibold border border-primary border-opacity-10">
                      {opt.type}
                    </span>
                    <h3 className="h4 fw-bold mb-0 text-dark">
                      ₹{opt.price}<small className="text-muted fs-6">/mo</small>
                    </h3>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted mb-4">
                    <MapPin size={16} className="text-primary" />
                    <span className="fw-medium">{opt.location}, India</span>
                  </div>
                  <div className="features mb-4">
                    <div className="d-flex align-items-center gap-2 mb-2 text-secondary small">
                      <HomeIcon size={14} className="text-success" />
                      <span>Fully Furnished Premium Stay</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-secondary small">
                      <Search size={14} className="text-success" />
                      <span>High-speed Wi-Fi & Laundry</span>
                    </div>
                  </div>
                  <button className="btn btn-primary w-100 py-3 rounded-xl fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 transition-all">
                    View Details <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

