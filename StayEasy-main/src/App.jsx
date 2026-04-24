
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import About from "./components/AboutUs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import Welcome from "./components/Welcome";
import SendOtp from "./components/SendOtp";
import ProfileSidebar from "./components/Sidebar";
import Locationpermission from "./components/Locationpermission";
import Profile from "./components/Profile";
import SearchHostels from "./components/SearchHostels";
import MyHostelSearch from "./components/MyHostelSearch";
import MapsComponent from "./components/MapComponent";
import HostelTracking from "./components/HostelTracking";
import AddHostelForm from "./components/HostelForm";
import Booking from "./components/Booking";
import ConfirmBooking from "./components/ConfirmBooking";
import MyBookings from "./components/MyBookings";
import OwnerBookings from "./components/OwnerBookings";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import HostelForm from "./components/HostelForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );
  const [userLocation, setUserLocation] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn && !userLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    }
  }, [isLoggedIn, userLocation]);

  return (
    <div
      style={{
        marginLeft: isLoggedIn ? (isSidebarOpen ? "20px" : "70px") : "0px",
        transition: "margin-left 0.3s ease-in-out",
      }}
    >
      <Router>
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsSidebarOpen={setIsSidebarOpen}
          setIsLoggedIn={setIsLoggedIn}
          isSidebarOpen={isSidebarOpen}
        />
        {isLoggedIn && <ProfileSidebar setIsSidebarOpen={setIsSidebarOpen} />}
        <div style={{ marginLeft: isLoggedIn ? "0px" : "0px", padding: "0px" }}>
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                  isSidebarOpen={isSidebarOpen}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen} />
              }
            />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route
              path="/sendOtp"
              element={
                <SendOtp
                  setIsLoggedIn={setIsLoggedIn}
                  isSidebarOpen={isSidebarOpen}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/permission"
              element={
                <Locationpermission
                  isSidebarOpen={isSidebarOpen}
                  userLocation={userLocation}
                  setUserLocation={setUserLocation}
                />
              }
            />

            <Route
              path="/profile"
              element={
                isLoggedIn ? (
                  <Profile isSidebarOpen={isSidebarOpen} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/search_hostel"
              element={<MyHostelSearch isSidebarOpen={isSidebarOpen} />}
            />
            {/* <Route path="/maps" element={<MapsComponent />} /> */}

            <Route
              path="/booking/:hostelId"
              element={<Booking isSidebarOpen={isSidebarOpen} />}
            />
            <Route
              path="/confirm-booking/:roomId"
              element={<ConfirmBooking isSidebarOpen={isSidebarOpen} />}
            />
            <Route
              path="/manage-bookings"
              element={
                <ProtectedRoute
                  element={<OwnerBookings isSidebarOpen={isSidebarOpen} />}
                  allowedRoles={["ROLE_OWNER"]}
                />
              }
            />
            <Route
              path="/add_hostel"
              element={
                <ProtectedRoute
                  element={<HostelForm isSidebarOpen={isSidebarOpen} />}
                  allowedRoles={["ROLE_OWNER"]}
                />
              }
            />
            <Route
              path="/my-bookings"
              element={<MyBookings isSidebarOpen={isSidebarOpen} />}
            />

            <Route path="/NotFound-404" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
