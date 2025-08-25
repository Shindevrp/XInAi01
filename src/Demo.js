import React, { useState, useEffect } from "react";
// import styled from "styled-components"; // Removed unused styled-components import
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Demo.css";

const layers = [
  {
    label: "Vision",
    color: "#5a67d8",
    content: ["AI Strategy", "Innovation", "Leadership"],
  },
  {
    label: "Technology",
    color: "#ecc94b",
    content: ["ML", "NLP", "Robotics"],
  },
  {
    label: "Community",
    color: "#48bb78",
    content: ["Collaboration", "Growth", "Support"],
  },
];

// ...styled-components (unchanged)...

function Header() {
  return (
    <nav className="demo-navbar">
      <div className="demo-navbar-logo">XinAI</div>
      <ul className="demo-navbar-links">
        <li className="navbar-link">
          <Link to="/" className="navbar-link-item">Home</Link>
        </li>
        <li className="navbar-link">
          <Link to="/courses" className="navbar-link-item">Courses</Link>
        </li>
        <li className="navbar-link">Community</li>
        <li className="navbar-link">Profile</li>
      </ul>
    </nav>
  );
}

function ConcentricCircles() {
  const [expanded, setExpanded] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const progress = Math.min(
        Math.floor((scrolled / 400) * layers.length),
        layers.length - 1
      );
      setExpanded(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isConverged = expanded === layers.length - 1;

  return (
    <div className="circles-zone">
      {layers.map((layer, idx) => {
        const isActive = idx <= expanded;
        const size = isConverged
          ? "35vw"
          : `${35 + (layers.length - idx - 1) * 12}vw`;
        const opacity = isActive ? 0.9 : 0.4;
        const scale = isActive ? 1.075 : 0.95;
        const zIndex = isActive ? 50 + idx : idx;

        return (
          <motion.div
            key={layer.label}
            className="layer-circle"
            style={{
              width: size,
              height: size,
              background: layer.color,
              opacity,
              zIndex,
              border: isActive ? `5px solid ${layer.color}` : "3px solid #222",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              boxSizing: "border-box",
            }}
            animate={{
              scale: isActive ? scale : 0.93,
              opacity,
            }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          >
            <div className={isActive ? "circle-label active" : "circle-label"}>
              {layer.label}
            </div>
            {isActive && !isConverged && (
              <motion.div
                className="info-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {layer.content.join(" • ")}
              </motion.div>
            )}
          </motion.div>
        );
      })}
      {isConverged && (
        <motion.div
          className="layer-circle"
          style={{
            width: "46vw",
            height: "46vw",
            background: "linear-gradient(130deg,#5a67d8 0%,#ecc94b 70%)",
            zIndex: 999,
            boxShadow: "0 0 140px 0 #222b",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            boxSizing: "border-box",
          }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 1 }}
        >
          <div className="converged-label">
            XINAI
            <br />
            <span className="converged-subtext">
              All Domains, One Vision
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function Demo() {
  return (
    <>
      <Header />
  <div className="wrapper">
        <h1 className="demo-title">Design Of Our Vision</h1>
        <ConcentricCircles />
        <div className="demo-description">
          Scroll down to explore expertise across all AI technology areas—see the journey
          converge as you reach the end!
        </div>
        <div className="scroll-spacer" />
  </div>
    </>
  );
}
