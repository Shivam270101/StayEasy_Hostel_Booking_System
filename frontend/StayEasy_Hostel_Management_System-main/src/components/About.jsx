import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion";
import { MapPin, Star, Shield, Navigation, Users, Home, CheckCircle, ArrowRight, Zap, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = ({ isSidebarOpen, isLoggedIn }) => {
  const navigate = useNavigate();

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    .ab-root { font-family: 'Inter', sans-serif; background: #F8FAFC; }

    /* Section tag */
    .ab-tag {
      font-size: 12px; font-weight: 700; letter-spacing: 1.2px;
      color: #5B5FEF; text-transform: uppercase;
    }
    .ab-title {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      font-weight: 800; color: #0F172A; letter-spacing: -.5px; line-height: 1.2;
    }

    /* Hero */
    .ab-hero {
      background: #0F1C2E;
      position: relative; overflow: hidden;
      padding: 90px 0 70px;
    }
    .ab-hero::before {
      content: ''; position: absolute; top: -140px; right: -140px;
      width: 500px; height: 500px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.22) 0%, transparent 68%);
      pointer-events: none;
    }
    .ab-hero::after {
      content: ''; position: absolute; bottom: -80px; left: -60px;
      width: 340px; height: 340px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.12) 0%, transparent 68%);
      pointer-events: none;
    }
    .ab-eyebrow {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(91,95,239,.18); border: 1px solid rgba(91,95,239,.35);
      border-radius: 100px; padding: 4px 14px;
      font-size: 12px; font-weight: 600; color: #a5b4fc; letter-spacing: .4px;
    }

    /* Story section */
    .ab-story-img {
      width: 100%; border-radius: 16px; object-fit: cover;
      height: 340px; display: block;
    }
    .ab-story-stat {
      background: #fff; border: 1px solid #E2E8F0;
      border-radius: 12px; padding: 16px 20px;
    }

    /* Feature cards */
    .ab-feat-card {
      background: #fff; border: 1px solid #E2E8F0;
      border-radius: 14px; padding: 28px 24px;
      height: 100%;
      transition: transform .2s, box-shadow .2s;
    }
    .ab-feat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(15,28,46,.1); }
    .ab-feat-icon {
      width: 48px; height: 48px; border-radius: 12px;
      background: rgba(91,95,239,.09);
      display: flex; align-items: center; justify-content: center;
      color: #5B5FEF; margin-bottom: 16px;
    }

    /* Values */
    .ab-value-card {
      background: #fff; border: 1px solid #E2E8F0;
      border-radius: 14px; padding: 24px;
      display: flex; gap: 16px; align-items: flex-start;
      transition: border-color .2s;
    }
    .ab-value-card:hover { border-color: #818CF8; }
    .ab-value-dot {
      width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
      background: rgba(91,95,239,.09);
      display: flex; align-items: center; justify-content: center;
      color: #5B5FEF; margin-top: 2px;
    }

    /* Team */
    .ab-team-card {
      background: #fff; border: 1px solid #E2E8F0;
      border-radius: 14px; overflow: hidden; text-align: center;
      transition: transform .2s, box-shadow .2s;
    }
    .ab-team-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(15,28,46,.1); }
    .ab-avatar {
      width: 100%; height: 180px; object-fit: cover; display: block;
      background: #E2E8F0;
    }
    .ab-avatar-placeholder {
      width: 100%; height: 180px;
      display: flex; align-items: center; justify-content: center;
      font-size: 2.5rem; font-weight: 800; color: #5B5FEF;
      background: rgba(91,95,239,.08);
    }

    /* Timeline */
    .ab-timeline { position: relative; }
    .ab-timeline::before {
      content: ''; position: absolute; left: 20px; top: 0; bottom: 0;
      width: 2px; background: #E2E8F0;
    }
    .ab-tl-item { display: flex; gap: 20px; margin-bottom: 32px; position: relative; }
    .ab-tl-dot {
      width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
      background: #5B5FEF;
      display: flex; align-items: center; justify-content: center;
      color: #fff; font-weight: 700; font-size: 13px; z-index: 1;
    }

    /* CTA */
    .ab-cta {
      background: #0F1C2E; border-radius: 20px;
      position: relative; overflow: hidden;
    }
    .ab-cta::before {
      content: ''; position: absolute; top: -80px; right: -80px;
      width: 300px; height: 300px; border-radius: 50%;
      background: radial-gradient(circle, rgba(91,95,239,.25) 0%, transparent 70%);
      pointer-events: none;
    }

    .ab-btn-indigo {
      background: #5B5FEF; color: #fff; border: none;
      border-radius: 8px; padding: 11px 24px;
      font-size: 14px; font-weight: 600; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: background .15s;
      display: inline-flex; align-items: center; gap: 6px;
    }
    .ab-btn-indigo:hover { background: #4B4FD9; }
    .ab-btn-ghost {
      background: transparent; color: rgba(255,255,255,.8);
      border: 1.5px solid rgba(255,255,255,.25);
      border-radius: 8px; padding: 11px 24px;
      font-size: 14px; font-weight: 500; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all .15s;
    }
    .ab-btn-ghost:hover { border-color: rgba(255,255,255,.6); color: #fff; }

    .ab-check { color: #5B5FEF; flex-shrink: 0; margin-top: 2px; }
  `;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  const features = [
    {
      icon: <MapPin size={22} />,
      title: "Location-based search",
      desc: "Find hostels and PGs near your college, workplace, or any landmark using our smart location engine.",
    },
    {
      icon: <Star size={22} />,
      title: "Verified reviews",
      desc: "Read honest, verified reviews from real residents before you commit to a stay.",
    },
    {
      icon: <Navigation size={22} />,
      title: "Turn-by-turn directions",
      desc: "Get precise directions to any listing so you can visit in person with ease.",
    },
    {
      icon: <Shield size={22} />,
      title: "Owner verification",
      desc: "Every property owner goes through an ID and document verification process before listing.",
    },
    {
      icon: <Zap size={22} />,
      title: "Real-time availability",
      desc: "Listings update instantly — see exactly what's available today, not last week.",
    },
    {
      icon: <Heart size={22} />,
      title: "Save & compare",
      desc: "Shortlist your favourites and compare amenities, price, and location side by side.",
    },
  ];

  const values = [
    {
      icon: <CheckCircle size={18} />,
      title: "Transparency first",
      desc: "No hidden fees, no misleading photos. What you see is what you get.",
    },
    {
      icon: <Users size={18} />,
      title: "Community-driven",
      desc: "Our platform gets better with every review, rating, and piece of feedback from residents.",
    },
    {
      icon: <Shield size={18} />,
      title: "Safety above all",
      desc: "We verify every listing and every owner so you never have to second-guess your safety.",
    },
    {
      icon: <Home size={18} />,
      title: "Everyone deserves a good home",
      desc: "From students to working professionals — quality accommodation should be accessible to all.",
    },
  ];

  const milestones = [
    { year: "2021", label: "Founded", desc: "StayEasy launched in Bangalore with 200 verified listings." },
    { year: "2022", label: "Expanded", desc: "Grew to 10 cities and crossed 10,000 registered users." },
    { year: "2023", label: "Scaled", desc: "Reached 50+ cities and 50,000 active residents." },
    { year: "2024", label: "Today", desc: "80,000+ happy residents, 12,000+ listings, still growing." },
  ];

  const team = [
    { initials: "AK", name: "Arjun Kapoor", role: "Co-founder & CEO" },
    { initials: "PS", name: "Priya Sharma", role: "Co-founder & CTO" },
    { initials: "RN", name: "Rohan Nair", role: "Head of Operations" },
  ];

  return (
    <>
      <style>{styles}</style>
      <div
        className="ab-root"
        style={{
          marginLeft: isLoggedIn ? (isSidebarOpen ? "270px" : "60px") : "0",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >

        {/* ══ HERO ══ */}
        <section className="ab-hero">
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <motion.div {...fadeUp(0)} className="mb-2">
              <span className="ab-eyebrow"><Heart size={11} /> Our story</span>
            </motion.div>
            <motion.h1 {...fadeUp(0.1)}
              style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-1px", lineHeight: 1.15, maxWidth: 620 }}
              className="mb-3"
            >
              Making "finding a place to stay" the <span style={{ color: "#818CF8" }}>easy</span> part.
            </motion.h1>
            <motion.p {...fadeUp(0.2)} style={{ color: "#94A3B8", fontSize: "1rem", maxWidth: 520, lineHeight: 1.65 }}>
              StayEasy was built for students, working professionals, and travellers who deserve a fast, honest, and stress-free way to find their next home.
            </motion.p>
          </div>
        </section>

        {/* ══ STORY + STATS ══ */}
        <section className="py-5" style={{ background: "#fff", borderBottom: "1px solid #E2E8F0" }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <motion.div className="col-12 col-lg-6" {...fadeUp(0)}>
                <div className="ab-tag mb-2">Who we are</div>
                <h2 className="ab-title mb-3">Built by renters, for renters</h2>
                <p style={{ color: "#64748B", lineHeight: 1.7, marginBottom: "1rem" }}>
                  Our founders spent years navigating unreliable brokers, misleading listings, and last-minute cancellations. StayEasy exists because we refused to accept that as normal.
                </p>
                <p style={{ color: "#64748B", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Every feature we build starts with the same question: does this make life genuinely easier for someone moving to a new city? If the answer isn't a clear yes, it doesn't ship.
                </p>
                <div className="row g-3">
                  {[
                    { value: "12,000+", label: "Verified listings" },
                    { value: "80,000+", label: "Happy residents" },
                    { value: "50+", label: "Cities" },
                    { value: "4.8★", label: "Avg. app rating" },
                  ].map(({ value, label }) => (
                    <div key={label} className="col-6">
                      <div className="ab-story-stat">
                        <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0F172A", lineHeight: 1 }}>{value}</div>
                        <div style={{ fontSize: "0.8rem", color: "#64748B", marginTop: 4 }}>{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="col-12 col-lg-6" {...fadeUp(0.1)}>
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80"
                  alt="A cosy, well-lit room"
                  className="ab-story-img"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ FEATURES ══ */}
        <section className="py-5">
          <div className="container">
            <motion.div className="text-center mb-5" {...fadeUp(0)}>
              <div className="ab-tag mb-1">What we offer</div>
              <h2 className="ab-title">Everything you need to decide with confidence</h2>
            </motion.div>
            <div className="row g-4">
              {features.map(({ icon, title, desc }, i) => (
                <motion.div key={title} className="col-12 col-md-6 col-lg-4" {...fadeUp(i * 0.07)}>
                  <div className="ab-feat-card">
                    <div className="ab-feat-icon">{icon}</div>
                    <h4 style={{ fontSize: "0.975rem", fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>{title}</h4>
                    <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ VALUES ══ */}
        <section className="py-5" style={{ background: "#fff", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <motion.div className="col-12 col-lg-5" {...fadeUp(0)}>
                <div className="ab-tag mb-2">What we stand for</div>
                <h2 className="ab-title mb-3">Our values aren't a slide deck — they're how we ship</h2>
                <p style={{ color: "#64748B", lineHeight: 1.7 }}>
                  We hold ourselves to the same standards we expect from every listing on our platform: honest, reliable, and worth your trust.
                </p>
              </motion.div>
              <motion.div className="col-12 col-lg-7" {...fadeUp(0.1)}>
                <div className="d-flex flex-column gap-3">
                  {values.map(({ icon, title, desc }) => (
                    <div key={title} className="ab-value-card">
                      <div className="ab-value-dot">{icon}</div>
                      <div>
                        <div style={{ fontSize: "0.925rem", fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>{title}</div>
                        <div style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.6 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══ */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              <motion.div className="col-12 col-lg-4" {...fadeUp(0)}>
                <div className="ab-tag mb-2">Our journey</div>
                <h2 className="ab-title mb-3">From a Bangalore apartment to 50+ cities</h2>
                <p style={{ color: "#64748B", lineHeight: 1.7 }}>
                  We started small, learned fast, and built the platform we wish had existed when we were looking for a place to stay.
                </p>
              </motion.div>
              <motion.div className="col-12 col-lg-8" {...fadeUp(0.1)}>
                <div className="ab-timeline ps-3">
                  {milestones.map(({ year, label, desc }) => (
                    <div key={year} className="ab-tl-item">
                      <div className="ab-tl-dot">{year.slice(2)}</div>
                      <div className="pt-1">
                        <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#5B5FEF", marginBottom: 2, letterSpacing: ".4px", textTransform: "uppercase" }}>{year} · {label}</div>
                        <div style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ TEAM ══ */}
        <section className="py-5" style={{ background: "#fff", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
          <div className="container">
            <motion.div className="text-center mb-5" {...fadeUp(0)}>
              <div className="ab-tag mb-1">The team</div>
              <h2 className="ab-title">The people behind StayEasy</h2>
            </motion.div>
            <div className="row g-4 justify-content-center">
              {team.map(({ initials, name, role }, i) => (
                <motion.div key={name} className="col-12 col-sm-6 col-md-4" style={{ maxWidth: 260 }} {...fadeUp(i * 0.1)}>
                  <div className="ab-team-card">
                    <div className="ab-avatar-placeholder">{initials}</div>
                    <div className="p-3">
                      <div style={{ fontWeight: 700, fontSize: "0.975rem", color: "#0F172A" }}>{name}</div>
                      <div style={{ fontSize: "0.825rem", color: "#64748B", marginTop: 3 }}>{role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="py-5">
          <div className="container">
            <motion.div className="ab-cta px-4 px-md-5 py-5" {...fadeUp(0)}>
              <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                <div className="col-12 col-md-7 mb-4 mb-md-0">
                  <span className="ab-eyebrow mb-3 d-inline-flex">
                    <CheckCircle size={11} /> Free to browse, zero brokerage
                  </span>
                  <h2 className="fw-bold text-white mb-2 mt-3" style={{ fontSize: "clamp(1.4rem,3vw,2rem)", letterSpacing: "-.4px", lineHeight: 1.25 }}>
                    Ready to find your next stay?
                  </h2>
                  <p style={{ color: "#94A3B8", fontSize: "0.9rem", margin: 0 }}>
                    Create a free account and get full access to listings, owner contacts, and instant booking — no broker, no commission.
                  </p>
                </div>
                <div className="col-12 col-md-5 d-flex gap-3 flex-wrap">
                  <button className="ab-btn-indigo" onClick={() => navigate("/signup")}>
                    Get started <ArrowRight size={15} />
                  </button>
                  <button className="ab-btn-ghost" onClick={() => navigate("/")}>
                    Browse listings
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

export default About;