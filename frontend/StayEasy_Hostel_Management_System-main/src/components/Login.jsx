import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion";
import UserService from "../Services/UserService";

const Login = ({ setIsLoggedIn, isLoggedIn, isSidebarOpen }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (formData.password.length < 6)
      newErrors.password = "At least 6 characters required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async () => {
    if (!validateForm()) return;
    try {
      setLoading(true);
      const response = await UserService.sendOtp(formData.email);
      if (response) {
        navigate("/sendOtp", { state: { User: formData, newuser: false } });
      } else {
        throw new Error("OTP sending failed");
      }
    } catch (error) {
      console.error("Error while sending OTP:", error);
      setErrors({ form: "Failed to send OTP. Please try again." });
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    .lg-root {
      font-family: 'Inter', sans-serif;
      display: flex;
      min-height: 100vh;
      background: #0F1C2E;
    }

    /* ── Left panel ── */
    .lg-left {
      flex: 0 0 420px;
      background: #0F1C2E;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 60px 48px;
      position: relative;
      overflow: hidden;
    }
    .lg-left::before {
      content: ''; position: absolute; top: -120px; right: -120px;
      width: 420px; height: 420px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.18) 0%, transparent 70%);
      pointer-events: none;
    }
    .lg-left::after {
      content: ''; position: absolute; bottom: -80px; left: -80px;
      width: 320px; height: 320px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.12) 0%, transparent 70%);
      pointer-events: none;
    }

    .lg-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 56px; text-decoration: none; }
    .lg-brand-icon {
      width: 36px; height: 36px; background: #5B5FEF; border-radius: 8px;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .lg-brand-icon svg { width: 18px; height: 18px; stroke: #fff; fill: none; stroke-width: 2; stroke-linecap: round; }
    .lg-brand-name { font-size: 18px; font-weight: 700; color: #fff; letter-spacing: -.3px; }

    .lg-headline {
      font-size: 2.1rem; font-weight: 800; color: #fff;
      line-height: 1.2; letter-spacing: -.8px; margin-bottom: 14px;
    }
    .lg-headline span { color: #818CF8; }
    .lg-sub { font-size: 15px; color: #94A3B8; line-height: 1.65; margin-bottom: 44px; }

    .lg-feat { display: flex; flex-direction: column; gap: 14px; }
    .lg-feat-item { display: flex; align-items: center; gap: 12px; font-size: 14px; color: #CBD5E1; font-weight: 500; }
    .lg-feat-dot {
      width: 28px; height: 28px; flex-shrink: 0; border-radius: 50%;
      background: rgba(91,95,239,.15); border: 1px solid rgba(91,95,239,.35);
      display: flex; align-items: center; justify-content: center;
    }
    .lg-feat-dot svg { width: 13px; height: 13px; stroke: #818CF8; fill: none; stroke-width: 2; stroke-linecap: round; }

    .lg-dot-grid { position: absolute; bottom: 48px; right: 32px; display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px; }
    .lg-dot-grid span { display: block; width: 3px; height: 3px; border-radius: 50%; background: rgba(148,163,184,.25); }

    /* ── Right panel ── */
    .lg-right {
      flex: 1; background: #F8FAFC;
      display: flex; align-items: center; justify-content: center;
      padding: 40px 32px; overflow-y: auto;
    }

    /* Form elements */
    .lg-input {
      width: 100%; padding: 10px 14px;
      font-size: 14px; font-family: 'Inter', sans-serif; color: #0F172A;
      background: #fff; border: 1.5px solid #E2E8F0; border-radius: 8px;
      outline: none; transition: border-color .18s, box-shadow .18s;
    }
    .lg-input::placeholder { color: #94A3B8; }
    .lg-input:focus { border-color: #5B5FEF; box-shadow: 0 0 0 3px rgba(91,95,239,.12); }
    .lg-input.has-error { border-color: #EF4444; }
    .lg-input.has-error:focus { box-shadow: 0 0 0 3px rgba(239,68,68,.1); }

    .lg-pw-toggle {
      position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; padding: 2px; color: #94A3B8; display: flex; align-items: center;
    }
    .lg-pw-toggle:hover { color: #5B5FEF; }
    .lg-pw-toggle svg { width: 17px; height: 17px; stroke: currentColor; fill: none; stroke-width: 1.8; }

    .lg-field-error { font-size: 12px; color: #EF4444; font-weight: 500; margin-top: 4px; }

    .lg-btn {
      width: 100%; padding: 11px;
      background: #5B5FEF; color: #fff; border: none; border-radius: 8px;
      font-size: 15px; font-weight: 600; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: background .18s, box-shadow .18s;
      display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .lg-btn:hover { background: #4B4FD9; box-shadow: 0 4px 16px rgba(91,95,239,.3); }
    .lg-btn svg { width: 16px; height: 16px; stroke: #fff; fill: none; stroke-width: 2; stroke-linecap: round; }

    .lg-link { color: #5B5FEF; text-decoration: none; font-weight: 500; }
    .lg-link:hover { text-decoration: underline; }

    .lg-divider { height: 1px; background: #E2E8F0; margin: 20px 0; }

    /* Loader */
    .lg-loader-screen {
      flex: 1; display: flex; flex-direction: column;
      align-items: center; justify-content: center; background: #F8FAFC; gap: 14px;
    }

    @media (max-width: 768px) {
      .lg-left { display: none; }
      .lg-right { padding: 32px 20px; }
    }
  `;

  const EyeIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
  );
  const EyeOffIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
  );

  return (
    <>
      <style>{styles}</style>
      <div
        className="lg-root"
        style={{ marginLeft: isLoggedIn ? (isSidebarOpen ? "220px" : "70px") : "0" }}
      >
        {/* ── Left branding panel ── */}
        <div className="lg-left d-none d-lg-flex flex-column justify-content-center">
          <Link to="/" className="lg-brand">
            <div className="lg-brand-icon">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            </div>
            <span className="lg-brand-name">StayEasy</span>
          </Link>

          <h1 className="lg-headline">
            Welcome<br />back to<br /><span>StayEasy.</span>
          </h1>
          <p className="lg-sub">
            Log in to access your saved listings, manage bookings, and connect with verified property owners.
          </p>

          <div className="lg-feat">
            {[
              { icon: "shield", text: "Your data is always secure" },
              { icon: "zap", text: "Pick up right where you left off" },
              { icon: "star", text: "Access your saved & shortlisted stays" },
            ].map(({ icon, text }) => (
              <div className="lg-feat-item" key={icon}>
                <div className="lg-feat-dot">
                  {icon === "shield" && <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                  {icon === "zap" && <svg viewBox="0 0 24 24"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>}
                  {icon === "star" && <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>}
                </div>
                {text}
              </div>
            ))}
          </div>

          <div className="lg-dot-grid">
            {Array.from({ length: 48 }).map((_, i) => <span key={i} />)}
          </div>
        </div>

        {/* ── Right form panel ── */}
        {loading ? (
          <div className="lg-loader-screen">
            <div className="spinner-border" style={{ color: "#5B5FEF", width: "2.4rem", height: "2.4rem" }} role="status" />
            <p className="mb-0 fw-medium" style={{ color: "#64748B", fontSize: "0.9rem" }}>Sending OTP…</p>
          </div>
        ) : (
          <div className="lg-right">
            <motion.div
              className="w-100"
              style={{ maxWidth: 400 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {/* Header */}
              <div className="mb-4">
                <h2 className="fw-bold mb-1" style={{ color: "#0F172A", fontSize: "1.6rem", letterSpacing: "-.4px" }}>
                  Sign in
                </h2>
                <p className="mb-0" style={{ fontSize: "0.875rem", color: "#64748B" }}>
                  Don't have an account?{" "}
                  <Link to="/signup" className="lg-link">Create one free</Link>
                </p>
              </div>

              {/* Form-level error */}
              {errors.form && (
                <div className="mb-3 px-3 py-2 rounded-2" style={{ background: "#FEF2F2", border: "1px solid #FECACA", fontSize: "13px", color: "#DC2626" }}>
                  ⚠ {errors.form}
                </div>
              )}

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold small text-dark mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={`lg-input${errors.email ? " has-error" : ""}`}
                  onKeyDown={(e) => e.key === "Enter" && submitHandler()}
                />
                {errors.email && <div className="lg-field-error">⚠ {errors.email}</div>}
              </div>

              {/* Password */}
              <div className="mb-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label fw-semibold small text-dark mb-0">Password</label>
                  <Link to="/forgot_password" className="lg-link" style={{ fontSize: "12px" }}>Forgot password?</Link>
                </div>
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`lg-input${errors.password ? " has-error" : ""}`}
                    style={{ paddingRight: "2.4rem" }}
                    onKeyDown={(e) => e.key === "Enter" && submitHandler()}
                  />
                  <button
                    type="button"
                    className="lg-pw-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.password && <div className="lg-field-error">⚠ {errors.password}</div>}
              </div>

              <div className="lg-divider mt-4" />

              {/* CTA */}
              <button className="lg-btn" onClick={submitHandler}>
                Continue with OTP
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>

              {/* Footer note */}
              <p className="text-center mt-3 mb-0" style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                By signing in, you agree to our{" "}
                <a href="#" className="lg-link" style={{ fontSize: "0.75rem" }}>Terms</a> and{" "}
                <a href="#" className="lg-link" style={{ fontSize: "0.75rem" }}>Privacy Policy</a>.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;