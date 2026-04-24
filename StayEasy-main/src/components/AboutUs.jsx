import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Search, Shield, Users, Star, ArrowRight } from "lucide-react";
import aboutBg from "../assets/images/about_bg.png";
import hostel1 from "../assets/images/hostel_1.png";
import hostel2 from "../assets/images/hostel_2.png";
import hostel3 from "../assets/images/hostel_3.png";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div
        className="hero-section position-relative d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container z-1"
        >
          <h1 className="display-2 fw-black mb-4 tracking-tight">About StayEasy</h1>
          <p className="fs-3 fw-light opacity-90 mx-auto" style={{ maxWidth: "800px" }}>
            Revolutionizing the way you find and experience co-living.
            We make finding your home away from home easier than ever.
          </p>
        </motion.div>
      </div>

      <Container className="py-5 my-5">
        {/* Mission Section */}
        <Row className="align-items-center mb-5 pb-5 g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="text-primary fw-bold text-uppercase tracking-wider mb-3">Our Mission</h6>
              <h2 className="display-5 fw-bold mb-4">Who <span className="text-primary">We Are</span></h2>
              <p className="fs-5 text-muted mb-4 lead">
                StayEasy is more than just a booking platform. It's a community-driven ecosystem designed for travelers, students, and professionals.
              </p>
              <div className="vstack gap-3 mb-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                    <CheckCircle className="text-primary" size={20} />
                  </div>
                  <span className="fw-medium text-dark">Verified listings only</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                    <CheckCircle className="text-primary" size={20} />
                  </div>
                  <span className="fw-medium text-dark">Real-time room availability</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                    <CheckCircle className="text-primary" size={20} />
                  </div>
                  <span className="fw-medium text-dark">Community-focused living</span>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="position-relative"
            >
              <img src={hostel1} alt="Hostel" className="img-fluid rounded-4 shadow-2xl" style={{ border: "10px solid white" }} />
              <div className="position-absolute bottom-0 end-0 bg-white p-4 shadow-lg rounded-4 m-3" style={{ maxWidth: "200px" }}>
                <Users className="text-primary mb-2" size={32} />
                <h5 className="fw-bold mb-0">2.5k+</h5>
                <p className="mb-0 text-muted small">Happy Residents</p>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Features Grid */}
        <div className="text-center mb-5 pb-4">
          <h6 className="text-primary fw-bold text-uppercase tracking-wider mb-3">Excellence</h6>
          <h2 className="display-6 fw-bold">Why <span className="text-primary">Choose</span> StayEasy?</h2>
        </div>
        <Row className="g-4 mb-5 pb-5">
          {[
            { icon: Shield, title: "Secure Living", desc: "24/7 CCTV surveillance and verified staff." },
            { icon: Star, title: "Premium Comfort", desc: "Top-tier amenities including high-speed Wi-Fi and healthy meals." },
            { icon: Search, title: "Smart Search", desc: "Find exactly what you need with our advanced filters." },
            { icon: MapPin, title: "Prime Locations", desc: "Stay close to major hubs, universities, and offices." }
          ].map((item, idx) => (
            <Col md={3} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-4 bg-white rounded-4 shadow-sm border h-100 text-center hover-up"
              >
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3 text-primary">
                  <item.icon size={32} />
                </div>
                <h4 className="fw-bold fs-5 mb-2">{item.title}</h4>
                <p className="text-muted small mb-0">{item.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Featured Listings */}
        <div className="mb-5 py-5 bg-light rounded-5 px-4 overflow-hidden">
          <div className="d-flex justify-content-between align-items-end mb-5 px-3">
            <div className="text-start">
              <h6 className="text-primary fw-bold text-uppercase tracking-wider mb-2">Portfolio</h6>
              <h2 className="display-6 fw-bold mb-0">Featured <span className="text-primary">Stays</span></h2>
            </div>
            <Button variant="link" className="text-primary fw-bold text-decoration-none d-none d-md-flex align-items-center gap-2">
              View All Listings <ArrowRight size={20} />
            </Button>
          </div>
          <Row className="g-4">
            {[
              { img: hostel1, title: "Urban Oasis", loc: "Pune", price: "5,500" },
              { img: hostel2, title: "Modern Nest", loc: "Bangalore", price: "7,000" },
              { img: hostel3, title: "Student Haven", loc: "Mumbai", price: "6,000" }
            ].map((hostel, idx) => (
              <Col md={4} key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <Card className="border-0 shadow-lg rounded-4 overflow-hidden h-100">
                    <div style={{ height: "240px", overflow: "hidden" }}>
                      <Card.Img src={hostel.img} className="h-100 w-100 object-fit-cover transition-transform" />
                    </div>
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h4 className="fw-bold fs-5 mb-0">{hostel.title}</h4>
                        <span className="text-primary fw-black fs-5">₹{hostel.price}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2 text-muted mb-4">
                        <MapPin size={16} /> <span className="small">{hostel.loc}, India</span>
                      </div>
                      <Button variant="primary" className="w-100 rounded-pill py-2 fw-bold shadow-sm">Explore Details</Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center py-5 rounded-5 bg-primary text-white mt-5 shadow-2xl overflow-hidden position-relative"
        >
          <div className="position-relative z-1">
            <h2 className="display-4 fw-bold mb-4">Ready to Find Your Home?</h2>
            <p className="fs-4 opacity-90 mb-5 mx-auto" style={{ maxWidth: "700px" }}>
              Join thousands of happy residents across 10+ cities in India.
            </p>
            <Button variant="light" size="lg" className="px-5 py-3 rounded-pill fw-bold text-primary shadow-lg border-0 hover-up">
              Browse All Hostels
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default About;

