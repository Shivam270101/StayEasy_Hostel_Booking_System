import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserService from "../Services/UserService";

const SendOtp = ({ setIsLoggedIn, isLoggedIn, isSidebarOpen }) => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.User || null;

  // Redirect to login if no user data is present
  useEffect(() => {
    if (!user || !user.email) {
      alert("Please login first");
      navigate("/login");
    }
  }, [user, navigate]);

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      setError("Please enter OTP");
      return;
    }

    if (otp.length !== 6) {
      setError("OTP must be 6 digits");
      return;
    }

    setError("");

    try {
      setLoading(true);
      // Don't use parseInt to preserve leading zeros
      const otpValue = otp.trim();
      await UserService.verifyOtp(user.email, otpValue);

      if (location.state?.newuser) {
        if (user) {
          await UserService.postuser(user);
          sessionStorage.setItem("isLoggedIn", "true");
          setIsLoggedIn(true);
          navigate("/permission");
        } else {
          navigate("/signup");
        }
      } else {
        try {
          const response = await UserService.loginuser(user);
          sessionStorage.setItem("user_id", response.data.user_id);
          sessionStorage.setItem("role", response.data.role);
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("isLoggedIn", "true");

          setIsLoggedIn(true);
          navigate("/permission");
        } catch (e) {
          alert("Login failed. Please try again.");
          navigate("/login");
        }
      }
    } catch (e) {
      console.error("Error verifying OTP:", e);
      alert("OTP verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Don't render if user is not available
  if (!user || !user.email) {
    return null;
  }

  return (
    <div
      className="container mt-5"
      style={{
        marginLeft: isLoggedIn ? (isSidebarOpen ? "20px" : "70px") : "0px",
        maxWidth: "400px",
      }}
    >
      <h2 className="text-primary text-center">Verify OTP</h2>
      <p className="text-muted text-center">
        OTP sent to <strong>{user.email}</strong>
      </p>

      {error && <div className="alert alert-danger">{error}</div>}

      <input
        type="text"
        className="form-control mb-3 text-center"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        maxLength={6}
      />

      <button
        className="btn btn-success w-100"
        onClick={handleVerifyOtp}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>
    </div>
  );
};

export default SendOtp;
