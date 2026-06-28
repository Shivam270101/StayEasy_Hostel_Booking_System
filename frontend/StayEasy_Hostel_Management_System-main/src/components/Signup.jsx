import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../Services/UserService";
import { motion } from "framer-motion";

const Signup = ({ setIsLoggedIn, isLoggedIn, isSidebarOpen }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
    password: "",
    confirmPassword: "",
    userType: "ROLE_USER",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.firstName.trim().length < 3)
      newErrors.firstName = "At least 3 characters required";
    if (formData.lastName.trim().length < 3)
      newErrors.lastName = "At least 3 characters required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (formData.password.length < 6)
      newErrors.password = "At least 6 characters required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (formData.phoneNo && formData.phoneNo.length < 10)
      newErrors.phoneNo = "At least 10 digits required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOtp = async () => {
    if (validateForm()) {
      const user = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        address: formData.address,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        role: formData.userType,
      };
      try {
        setLoading(true);
        await UserService.sendOtp(user.email);
        setLoading(false);
        navigate("/sendOtp", { state: { User: user, newuser: true } });
      } catch (error) {
        setLoading(false);
        console.error("OTP send failed:", error);
        alert("Failed to send OTP. Please try again.");
      }
    }
  };

  /* ── Minimal scoped styles for things Bootstrap can't do ── */
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    .su-root { font-family: 'Inter', sans-serif !important; }

    /* Left panel glows */
    .su-left { position: relative; overflow: hidden; background: #0F1C2E; }
    .su-left::before {
      content: ''; position: absolute; top: -120px; right: -120px;
      width: 420px; height: 420px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.20) 0%, transparent 70%);
      pointer-events: none;
    }
    .su-left::after {
      content: ''; position: absolute; bottom: -80px; left: -80px;
      width: 320px; height: 320px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.13) 0%, transparent 70%);
      pointer-events: none;
    }

    /* Dot grid */
    .su-dot-grid { display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px; }
    .su-dot-grid span { display: block; width: 3px; height: 3px; border-radius: 50%; background: rgba(148,163,184,.25); }

    /* Feature icon circles */
    .su-feat-icon {
      width: 28px; height: 28px; flex-shrink: 0; border-radius: 50%;
      background: rgba(91,95,239,.15); border: 1px solid rgba(91,95,239,.35);
      display: flex; align-items: center; justify-content: center;
    }
    .su-feat-icon svg { width: 13px; height: 13px; stroke: #818CF8; fill: none; stroke-width: 2; stroke-linecap: round; }

    /* Password toggle */
    .su-pw-toggle {
      position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; padding: 2px; color: #94A3B8;
      display: flex; align-items: center;
    }
    .su-pw-toggle:hover { color: #5B5FEF; }
    .su-pw-toggle svg { width: 17px; height: 17px; stroke: currentColor; fill: none; stroke-width: 1.8; }

    /* Role cards — selected border only */
    .su-role-card { cursor: pointer; transition: border-color .15s, background .15s; }
    .su-role-card.selected { border-color: #5B5FEF !important; background: rgba(91,95,239,.05) !important; }
    .su-role-dot {
      width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
      border: 2px solid #CBD5E1; display: flex; align-items: center; justify-content: center;
      transition: all .15s;
    }
    .su-role-card.selected .su-role-dot { border-color: #5B5FEF; background: #5B5FEF; }
    .su-role-card.selected .su-role-dot::after {
      content: ''; width: 6px; height: 6px; border-radius: 50%; background: #fff;
    }

    /* Bootstrap focus override for indigo */
    .su-input:focus {
      border-color: #5B5FEF !important;
      box-shadow: 0 0 0 3px rgba(91,95,239,.15) !important;
    }
    .su-btn-primary {
      background: #5B5FEF !important; border-color: #5B5FEF !important;
      font-weight: 600; letter-spacing: -.1px;
      transition: background .18s, box-shadow .18s, transform .1s !important;
    }
    .su-btn-primary:hover {
      background: #4B4FD9 !important; border-color: #4B4FD9 !important;
      box-shadow: 0 4px 16px rgba(91,95,239,.35) !important;
    }
    .su-btn-primary:active { transform: scale(.99); }
    .su-btn-primary svg { width: 15px; height: 15px; stroke: #fff; fill: none; stroke-width: 2; stroke-linecap: round; }

    .su-link { color: #5B5FEF !important; text-decoration: none !important; font-weight: 500; }
    .su-link:hover { text-decoration: underline !important; }
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
        className="su-root d-flex"
        style={{
          minHeight: "100vh",
          marginLeft: isLoggedIn ? (isSidebarOpen ? "220px" : "70px") : "0",
        }}
      >
        {/* ── Left branding panel ── */}
        <div
          className="su-left d-none d-lg-flex flex-column justify-content-center p-5"
          style={{ flex: "0 0 400px" }}
        >
          {/* Brand */}
          <div className="d-flex align-items-center gap-2 mb-5">
            <div
              className="d-flex align-items-center justify-content-center rounded-2"
              style={{ width: 36, height: 36, background: "#5B5FEF", flexShrink: 0 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="#fff" fill="none" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="fw-bold text-white fs-5">Platform</span>
          </div>

          {/* Headline */}
          <h1 className="fw-bold text-white lh-sm mb-3" style={{ fontSize: "2.1rem", letterSpacing: "-.6px" }}>
            Your space to build<br />
            <span style={{ color: "#818CF8" }}>something great.</span>
          </h1>
          <p className="mb-5" style={{ color: "#94A3B8", fontSize: "0.93rem", lineHeight: 1.65 }}>
            Join thousands of teams who manage, collaborate, and ship faster — all in one place.
          </p>

          {/* Features */}
          <div className="d-flex flex-column gap-3 mb-5">
            {[
              { icon: "shield", text: "Enterprise-grade security" },
              { icon: "zap", text: "Real-time collaboration" },
              { icon: "chart", text: "Advanced analytics & reporting" },
            ].map(({ icon, text }) => (
              <div key={icon} className="d-flex align-items-center gap-3">
                <div className="su-feat-icon">
                  {icon === "shield" && <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                  {icon === "zap" && <svg viewBox="0 0 24 24"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>}
                  {icon === "chart" && <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>}
                </div>
                <span className="fw-medium" style={{ color: "#CBD5E1", fontSize: "0.875rem" }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Dot grid */}
          <div className="su-dot-grid position-absolute bottom-0 end-0 mb-4 me-4">
            {Array.from({ length: 48 }).map((_, i) => <span key={i} />)}
          </div>
        </div>

        {/* ── Right form panel ── */}
        {loading ? (
          <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center bg-light gap-3">
            <div className="spinner-border" style={{ color: "#5B5FEF", width: "2.5rem", height: "2.5rem" }} role="status" />
            <p className="text-secondary fw-medium mb-0" style={{ fontSize: "0.9rem" }}>Sending OTP…</p>
          </div>
        ) : (
          <div className="flex-grow-1 d-flex align-items-center justify-content-center bg-light overflow-auto py-5 px-3">
            <motion.div
              className="w-100"
              style={{ maxWidth: 480 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {/* Header */}
              <div className="mb-4">
                <h2 className="fw-bold mb-1" style={{ color: "#0F172A", letterSpacing: "-.4px" }}>
                  Create your account
                </h2>
                <p className="text-secondary mb-0" style={{ fontSize: "0.875rem" }}>
                  Already have one?{" "}
                  <Link to="/login" className="su-link">Sign in instead</Link>
                </p>
              </div>

              {/* Name row */}
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <label className="form-label fw-semibold small text-dark">First Name</label>
                  <div className="position-relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={`form-control su-input${errors.firstName ? " is-invalid" : ""}`}
                    />
                  </div>
                  {errors.firstName && <div className="invalid-feedback d-block small">⚠ {errors.firstName}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label fw-semibold small text-dark">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={`form-control su-input${errors.lastName ? " is-invalid" : ""}`}
                  />
                  {errors.lastName && <div className="invalid-feedback d-block small">⚠ {errors.lastName}</div>}
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold small text-dark">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={`form-control su-input${errors.email ? " is-invalid" : ""}`}
                />
                {errors.email && <div className="invalid-feedback d-block small">⚠ {errors.email}</div>}
              </div>

              {/* Phone + Address */}
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <label className="form-label fw-semibold small text-dark">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className={`form-control su-input${errors.phoneNo ? " is-invalid" : ""}`}
                  />
                  {errors.phoneNo && <div className="invalid-feedback d-block small">⚠ {errors.phoneNo}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label fw-semibold small text-dark">
                    Address{" "}
                    <span className="fw-normal text-secondary">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="City, Country"
                    className="form-control su-input"
                  />
                </div>
              </div>

              <hr className="my-3 text-secondary opacity-25" />

              {/* Password row */}
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <label className="form-label fw-semibold small text-dark">Password</label>
                  <div className="position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Min. 6 characters"
                      className={`form-control su-input${errors.password ? " is-invalid" : ""}`}
                      style={{ paddingRight: "2.4rem" }}
                    />
                    <button
                      type="button"
                      className="su-pw-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {errors.password && <div className="invalid-feedback d-block small">⚠ {errors.password}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label fw-semibold small text-dark">Confirm Password</label>
                  <div className="position-relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repeat password"
                      className={`form-control su-input${errors.confirmPassword ? " is-invalid" : ""}`}
                      style={{ paddingRight: "2.4rem" }}
                    />
                    <button
                      type="button"
                      className="su-pw-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {errors.confirmPassword && <div className="invalid-feedback d-block small">⚠ {errors.confirmPassword}</div>}
                </div>
              </div>

              <hr className="my-3 text-secondary opacity-25" />

              {/* Account type */}
              <div className="mb-4">
                <label className="form-label fw-semibold small text-dark mb-2">Account Type</label>
                <div className="d-flex gap-3">
                  {[
                    { value: "ROLE_USER", label: "User", desc: "Access services & features" },
                    { value: "ROLE_OWNER", label: "Owner", desc: "Manage listings & settings" },
                  ].map(({ value, label, desc }) => (
                    <label
                      key={value}
                      className={`su-role-card flex-fill d-flex align-items-center gap-2 border rounded-2 px-3 py-2${formData.userType === value ? " selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value={value}
                        checked={formData.userType === value}
                        onChange={handleChange}
                        className="d-none"
                      />
                      <div className="su-role-dot" />
                      <div>
                        <div className="fw-semibold" style={{ fontSize: "0.8rem", color: "#374151" }}>{label}</div>
                        <div className="text-secondary" style={{ fontSize: "0.72rem" }}>{desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={sendOtp}
                className="btn su-btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2"
              >
                Continue with OTP
                <svg viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              {/* Footer */}
              <p className="text-center text-secondary mt-3 mb-0" style={{ fontSize: "0.78rem" }}>
                By creating an account, you agree to our{" "}
                <a href="#" className="su-link">Terms of Service</a> and{" "}
                <a href="#" className="su-link">Privacy Policy</a>.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;