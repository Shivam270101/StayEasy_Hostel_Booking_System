import React, { useState } from "react";
import { Search, MapPin, Star, Shield, Wifi, Coffee, ChevronRight, Users, Home as HomeIcon, CheckCircle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ isSidebarOpen, isLoggedIn }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const handleSearch = () => {
    if (searchQuery.trim()) navigate("/signup");
    else navigate("/signup");
  };

  const filters = ["All", "PG", "Hostel", "Shared Room", "Private Room"];

  const listings = [
    {
      id: 1,
      name: "Sunrise PG for Boys",
      location: "Koramangala, Bangalore",
      price: "₹7,500",
      period: "/mo",
      rating: 4.8,
      reviews: 124,
      type: "PG",
      tags: ["WiFi", "Meals", "Laundry"],
      badge: "Top Rated",
      badgeColor: "#5B5FEF",
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80",
    },
    {
      id: 2,
      name: "The Urban Nest",
      location: "Andheri West, Mumbai",
      price: "₹6,200",
      period: "/mo",
      rating: 4.6,
      reviews: 89,
      type: "Hostel",
      tags: ["WiFi", "AC", "Security"],
      badge: "New",
      badgeColor: "#10B981",
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
    },
    {
      id: 3,
      name: "Green Valley Hostel",
      location: "Sector 62, Noida",
      price: "₹5,800",
      period: "/mo",
      rating: 4.5,
      reviews: 67,
      type: "Hostel",
      tags: ["WiFi", "Gym", "Meals"],
      badge: "Popular",
      badgeColor: "#F59E0B",
      img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&q=80",
    },
  ];

  const stats = [
    { icon: <HomeIcon size={22} />, value: "12,000+", label: "Verified Listings" },
    { icon: <Users size={22} />, value: "80,000+", label: "Happy Residents" },
    { icon: <MapPin size={22} />, value: "50+", label: "Cities Covered" },
    { icon: <Shield size={22} />, value: "100%", label: "Verified Owners" },
  ];

  const amenities = [
    { icon: <Wifi size={18} />, label: "High-speed WiFi" },
    { icon: <Coffee size={18} />, label: "Meals Included" },
    { icon: <Shield size={18} />, label: "24/7 Security" },
    { icon: <CheckCircle size={18} />, label: "Verified Listings" },
  ];

  const steps = [
    { step: "01", title: "Search your city", desc: "Enter your preferred location, college, or workplace to find nearby stays." },
    { step: "02", title: "Compare & shortlist", desc: "Browse photos, amenities, pricing, and verified reviews side by side." },
    { step: "03", title: "Book instantly", desc: "Connect with the owner and confirm your stay — no middlemen, no hidden fees." },
  ];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    .hm-root { font-family: 'Inter', sans-serif; background: #F8FAFC; }

    /* ── Hero ── */
    .hm-hero {
      background: #0F1C2E;
      position: relative;
      overflow: hidden;
      padding: 100px 0 80px;
    }
    .hm-hero::before {
      content: '';
      position: absolute; top: -160px; right: -160px;
      width: 520px; height: 520px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.22) 0%, transparent 68%);
      pointer-events: none;
    }
    .hm-hero::after {
      content: '';
      position: absolute; bottom: -100px; left: -80px;
      width: 380px; height: 380px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.12) 0%, transparent 68%);
      pointer-events: none;
    }

    .hm-hero-eyebrow {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(91,95,239,.18); border: 1px solid rgba(91,95,239,.35);
      border-radius: 100px; padding: 4px 14px;
      font-size: 12px; font-weight: 600; color: #a5b4fc; letter-spacing: .4px;
    }

    .hm-hero-title {
      font-size: clamp(2rem, 5vw, 3.2rem);
      font-weight: 800; color: #fff;
      line-height: 1.15; letter-spacing: -1px;
    }
    .hm-hero-title span { color: #818CF8; }

    .hm-search-bar {
      background: #fff;
      border-radius: 12px;
      padding: 6px 6px 6px 16px;
      display: flex; align-items: center; gap: 10px;
      max-width: 560px;
    }
    .hm-search-input {
      border: none; outline: none; flex: 1;
      font-size: 15px; font-family: 'Inter', sans-serif; color: #0F172A;
      background: transparent;
    }
    .hm-search-input::placeholder { color: #94A3B8; }
    .hm-search-btn {
      background: #5B5FEF; color: #fff;
      border: none; border-radius: 8px;
      padding: 10px 22px; font-size: 14px; font-weight: 600;
      cursor: pointer; display: flex; align-items: center; gap-6px;
      white-space: nowrap; font-family: 'Inter', sans-serif;
      transition: background .15s;
    }
    .hm-search-btn:hover { background: #4B4FD9; }

    /* Filter pills */
    .hm-pill {
      border: 1.5px solid #E2E8F0; background: #fff;
      border-radius: 100px; padding: 5px 16px;
      font-size: 13px; font-weight: 500; color: #64748B;
      cursor: pointer; transition: all .15s;
    }
    .hm-pill:hover { border-color: #818CF8; color: #5B5FEF; }
    .hm-pill.active { background: #5B5FEF; border-color: #5B5FEF; color: #fff; }

    /* ── Stats bar ── */
    .hm-stats { background: #fff; border-bottom: 1px solid #E2E8F0; }
    .hm-stat-icon {
      width: 44px; height: 44px; border-radius: 10px;
      background: rgba(91,95,239,.09);
      display: flex; align-items: center; justify-content: center;
      color: #5B5FEF; flex-shrink: 0;
    }

    /* ── Cards ── */
    .hm-card {
      background: #fff; border: 1px solid #E2E8F0;
      border-radius: 14px; overflow: hidden;
      transition: transform .2s, box-shadow .2s;
    }
    .hm-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(15,28,46,.12); }

    .hm-card-img { width: 100%; height: 190px; object-fit: cover; display: block; }

    .hm-badge {
      display: inline-block;
      font-size: 11px; font-weight: 700;
      border-radius: 6px; padding: 3px 9px;
      color: #fff; letter-spacing: .3px;
    }

    .hm-tag {
      display: inline-flex; align-items: center; gap: 4px;
      background: #F1F5F9; border-radius: 6px;
      padding: 3px 10px; font-size: 12px; font-weight: 500; color: #475569;
    }

    .hm-rating { display: flex; align-items: center; gap: 4px; }

    /* ── Steps ── */
    .hm-step-num {
      font-size: 2.5rem; font-weight: 800;
      color: rgba(91,95,239,.15); line-height: 1;
      font-variant-numeric: tabular-nums;
    }

    /* ── CTA banner ── */
    .hm-cta-banner {
      background: #0F1C2E;
      border-radius: 20px;
      position: relative; overflow: hidden;
    }
    .hm-cta-banner::before {
      content: '';
      position: absolute; top: -80px; right: -80px;
      width: 300px; height: 300px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.25) 0%, transparent 70%);
      pointer-events: none;
    }

    .hm-btn-indigo {
      background: #5B5FEF; color: #fff; border: none;
      border-radius: 8px; padding: 11px 24px;
      font-size: 14px; font-weight: 600; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: background .15s;
    }
    .hm-btn-indigo:hover { background: #4B4FD9; }

    .hm-btn-ghost {
      background: transparent; color: rgba(255,255,255,.8);
      border: 1.5px solid rgba(255,255,255,.25);
      border-radius: 8px; padding: 11px 24px;
      font-size: 14px; font-weight: 500; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all .15s;
    }
    .hm-btn-ghost:hover { border-color: rgba(255,255,255,.6); color: #fff; }

    /* Section headings */
    .hm-section-tag {
      font-size: 12px; font-weight: 700; letter-spacing: 1.2px;
      color: #5B5FEF; text-transform: uppercase;
    }
    .hm-section-title {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 800; color: #0F172A; letter-spacing: -.4px;
    }

    .hm-amenity-chip {
      display: inline-flex; align-items: center; gap: 8px;
      background: #fff; border: 1px solid #E2E8F0;
      border-radius: 100px; padding: 8px 18px;
      font-size: 13px; font-weight: 500; color: #374151;
    }
    .hm-amenity-chip svg { color: #5B5FEF; }
  `;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay },
  });

  return (
    <>
      <style>{styles}</style>
      <div
        className="hm-root"
        style={{
          marginLeft: isLoggedIn ? (isSidebarOpen ? "270px" : "60px") : "0",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >

        {/* ══ HERO ══ */}
        <section className="hm-hero">
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <motion.div {...fadeUp(0)} className="mb-2">
              <span className="hm-hero-eyebrow">
                <MapPin size={11} /> Trusted by 80,000+ residents across India
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="hm-hero-title mb-3">
              Find your perfect<br />
              <span>PG or hostel</span>, fast.
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="mb-4" style={{ color: "#94A3B8", fontSize: "1rem", maxWidth: 500 }}>
              Search verified hostels and paying guest accommodations near your college, workplace, or preferred neighbourhood.
            </motion.p>

            {/* Search bar */}
            <motion.div {...fadeUp(0.3)} className="mb-4">
              <div className="hm-search-bar">
                <Search size={18} color="#94A3B8" style={{ flexShrink: 0 }} />
                <input
                  className="hm-search-input"
                  placeholder="Search by city, locality, or landmark…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button className="hm-search-btn" onClick={handleSearch}>
                  <Search size={15} style={{ marginRight: 6 }} /> Search
                </button>
              </div>
            </motion.div>

            {/* Popular cities */}
            <motion.div {...fadeUp(0.4)} className="d-flex align-items-center gap-2 flex-wrap">
              <span style={{ fontSize: 13, color: "#64748B" }}>Popular:</span>
              {["Bangalore", "Mumbai", "Pune", "Hyderabad", "Delhi"].map((city) => (
                <button
                  key={city}
                  onClick={() => { setSearchQuery(city); navigate("/signup"); }}
                  style={{
                    background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)",
                    borderRadius: "100px", padding: "4px 14px", fontSize: 13,
                    color: "rgba(255,255,255,.75)", cursor: "pointer", fontFamily: "Inter, sans-serif",
                    transition: "all .15s",
                  }}
                  onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,.15)"; e.target.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.target.style.background = "rgba(255,255,255,.08)"; e.target.style.color = "rgba(255,255,255,.75)"; }}
                >
                  {city}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ STATS BAR ══ */}
        <section className="hm-stats py-4">
          <div className="container">
            <div className="row g-3 justify-content-center">
              {stats.map(({ icon, value, label }, i) => (
                <motion.div key={label} className="col-6 col-md-3" {...fadeUp(i * 0.08)}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="hm-stat-icon">{icon}</div>
                    <div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.1 }}>{value}</div>
                      <div style={{ fontSize: "0.8rem", color: "#64748B", marginTop: 2 }}>{label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ LISTINGS ══ */}
        <section className="py-5">
          <div className="container">
            {/* Header */}
            <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
              <div>
                <div className="hm-section-tag mb-1">Featured stays</div>
                <h2 className="hm-section-title mb-0">Popular near you</h2>
              </div>
              <button
                onClick={() => navigate("/signup")}
                className="d-flex align-items-center gap-1"
                style={{ background: "none", border: "none", color: "#5B5FEF", fontWeight: 600, fontSize: 14, cursor: "pointer", padding: 0, fontFamily: "Inter,sans-serif" }}
              >
                View all listings <ChevronRight size={16} />
              </button>
            </div>

            {/* Filter pills */}
            <div className="d-flex gap-2 flex-wrap mb-4">
              {filters.map((f) => (
                <button key={f} className={`hm-pill${activeFilter === f ? " active" : ""}`} onClick={() => setActiveFilter(f)}>
                  {f}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="row g-4">
              {listings.map(({ id, name, location, price, period, rating, reviews, type, tags, badge, badgeColor, img }, i) => (
                <motion.div key={id} className="col-12 col-md-6 col-lg-4" {...fadeUp(i * 0.1)}>
                  <div className="hm-card h-100">
                    <div style={{ position: "relative" }}>
                      <img src={img} alt={name} className="hm-card-img" />
                      <div style={{ position: "absolute", top: 12, left: 12 }}>
                        <span className="hm-badge" style={{ background: badgeColor }}>{badge}</span>
                      </div>
                      <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(15,28,46,.7)", borderRadius: 8, padding: "4px 10px" }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{type}</span>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="d-flex justify-content-between align-items-start mb-1">
                        <h3 className="mb-0" style={{ fontSize: "0.975rem", fontWeight: 700, color: "#0F172A" }}>{name}</h3>
                        <div className="hm-rating ms-2" style={{ flexShrink: 0 }}>
                          <Star size={13} fill="#F59E0B" color="#F59E0B" />
                          <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{rating}</span>
                          <span style={{ fontSize: 12, color: "#94A3B8" }}>({reviews})</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-1 mb-3">
                        <MapPin size={13} color="#94A3B8" />
                        <span style={{ fontSize: 13, color: "#64748B" }}>{location}</span>
                      </div>
                      <div className="d-flex gap-2 flex-wrap mb-3">
                        {tags.map((tag) => (
                          <span key={tag} className="hm-tag">{tag}</span>
                        ))}
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-2" style={{ borderTop: "1px solid #F1F5F9" }}>
                        <div>
                          <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F172A" }}>{price}</span>
                          <span style={{ fontSize: 13, color: "#94A3B8" }}>{period}</span>
                        </div>
                        <button
                          className="hm-btn-indigo"
                          style={{ padding: "7px 16px", fontSize: 13 }}
                          onClick={() => navigate("/signup")}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ AMENITIES ══ */}
        <section className="py-5" style={{ background: "#fff", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
          <div className="container text-center">
            <motion.div {...fadeUp(0)}>
              <div className="hm-section-tag mb-1">What's included</div>
              <h2 className="hm-section-title mb-2">Everything you need, sorted</h2>
              <p className="mb-4" style={{ color: "#64748B", maxWidth: 480, margin: "0 auto 2rem" }}>
                Every listing on StayEasy is vetted for the essentials so you move in with confidence.
              </p>
            </motion.div>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {amenities.map(({ icon, label }, i) => (
                <motion.div key={label} {...fadeUp(i * 0.08)}>
                  <span className="hm-amenity-chip">{icon} {label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ══ */}
        <section className="py-5">
          <div className="container">
            <motion.div className="text-center mb-5" {...fadeUp(0)}>
              <div className="hm-section-tag mb-1">How it works</div>
              <h2 className="hm-section-title">Booked in three steps</h2>
            </motion.div>
            <div className="row g-4">
              {steps.map(({ step, title, desc }, i) => (
                <motion.div key={step} className="col-12 col-md-4" {...fadeUp(i * 0.12)}>
                  <div className="p-4" style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14, height: "100%" }}>
                    <div className="hm-step-num mb-2">{step}</div>
                    <h4 className="fw-bold mb-2" style={{ color: "#0F172A", fontSize: "1rem" }}>{title}</h4>
                    <p className="mb-0" style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="pb-5">
          <div className="container">
            <motion.div className="hm-cta-banner px-4 px-md-5 py-5" {...fadeUp(0)}>
              <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                <div className="col-12 col-md-7 mb-4 mb-md-0">
                  <div className="hm-hero-eyebrow mb-3" style={{ display: "inline-flex" }}>
                    <CheckCircle size={11} /> Free to browse, zero fees
                  </div>
                  <h2 className="fw-bold text-white mb-2" style={{ fontSize: "clamp(1.4rem,3vw,2rem)", letterSpacing: "-.4px", lineHeight: 1.25 }}>
                    Ready to find your<br />next stay?
                  </h2>
                  <p style={{ color: "#94A3B8", fontSize: "0.9rem", marginBottom: 0 }}>
                    Create a free account and unlock full access to listings, owner contact details, and instant booking.
                  </p>
                </div>
                <div className="col-12 col-md-5 d-flex gap-3 flex-wrap">
                  <button className="hm-btn-indigo" onClick={() => navigate("/signup")}>
                    Get started — it's free
                  </button>
                  <button className="hm-btn-ghost" onClick={() => navigate("/about")}>
                    Learn more
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;