import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const layers = [
  {
    label: "Artificial Intelligence",
    color: "#2d3748",
    content: ["PyTorch", "TensorFlow", "OpenAI", "Scikit-Learn"],
  },
  {
    label: "Machine Learning",
    color: "#4a5568",
    content: ["XGBoost", "LightGBM", "Keras", "CatBoost"],
  },
  {
    label: "Natural Language Processing",
    color: "#5a67d8",
    content: ["spaCy", "BERT", "GPT", "NLTK"],
  },
  {
    label: "Computer Vision",
    color: "#38b2ac",
    content: ["OpenCV", "YOLO", "Detectron2", "MediaPipe"],
  },
  {
    label: "Foundational Mathematics",
    color: "#ecc94b",
    content: ["Linear Algebra", "Calculus", "Probability", "Optimization"],
  },
  {
    label: "Robotics",
    color: "#ed8936",
    content: ["ROS", "VREP", "Gazebo", "Robotic Arms"],
  },
];

const Wrapper = styled.div`
  min-height: 100vh;
  background: #181f2f;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding-top: 1rem;
`;

const CirclesZone = styled.div`
  position: relative;
  width: 70vw;
  height: 80vh;
  min-width: 320px;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LayerCircle = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoCard = styled(motion.div)`
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
  margin-top: 1.2rem;
  background: rgba(24, 50, 80, 0.97);
  padding: 12px 30px;
  border-radius: 38px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.11);
`;

function Header() {
  return (
    <nav
      className="demo-navbar"
      style={{
        boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        borderBottom: "1px solid #e5e7eb",
        padding: "24px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <div
        className="demo-navbar-logo"
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#222",
          letterSpacing: "1px",
          fontFamily: "Segoe UI, Arial, sans-serif",
        }}
      >
        XinAI
      </div>
      <ul
        className="demo-navbar-links"
        style={{
          display: "flex",
          gap: "40px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li
          style={{
            fontSize: "1.08rem",
            color: "#444",
            fontWeight: 500,
            fontFamily: "Segoe UI, Arial, sans-serif",
            cursor: "pointer",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </li>
        <li
          style={{
            fontSize: "1.08rem",
            color: "#444",
            fontWeight: 500,
            fontFamily: "Segoe UI, Arial, sans-serif",
            cursor: "pointer",
          }}
        >
          <Link to="/courses" style={{ textDecoration: "none", color: "inherit" }}>
            Courses
          </Link>
        </li>
        <li
          style={{
            fontSize: "1.08rem",
            color: "#444",
            fontWeight: 500,
            fontFamily: "Segoe UI, Arial, sans-serif",
            cursor: "pointer",
          }}
        >
          Community
        </li>
        <li
          style={{
            fontSize: "1.08rem",
            color: "#444",
            fontWeight: 500,
            fontFamily: "Segoe UI, Arial, sans-serif",
            cursor: "pointer",
          }}
        >
          Profile
        </li>
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
    <CirclesZone>
      {layers.map((layer, idx) => {
        const isActive = idx <= expanded;
        const size = isConverged
          ? "35vw"
          : `${35 + (layers.length - idx - 1) * 12}vw`;
        const opacity = isActive ? 0.9 : 0.4;
        const scale = isActive ? 1.075 : 0.95;
        const zIndex = isActive ? 50 + idx : idx;

        return (
          <LayerCircle
            key={layer.label}
            style={{
              width: size,
              height: size,
              background: layer.color,
              opacity,
              zIndex,
              border: isActive ? `5px solid ${layer.color}` : "3px solid #222",
            }}
            animate={{
              scale: isActive ? scale : 0.93,
              opacity,
            }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          >
            <div
              style={{
                fontSize: isActive ? "2.1rem" : "1.2rem",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "1.2px",
              }}
            >
              {layer.label}
            </div>
            {isActive && !isConverged && (
              <InfoCard initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
                {layer.content.join(" • ")}
              </InfoCard>
            )}
          </LayerCircle>
        );
      })}
      {isConverged && (
        <LayerCircle
          style={{
            width: "46vw",
            height: "46vw",
            background: "linear-gradient(130deg,#5a67d8 0%,#ecc94b 70%)",
            zIndex: 999,
            boxShadow: "0 0 140px 0 #222b",
          }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 1 }}
        >
          <div
            style={{
              fontSize: "2.6rem",
              color: "#fff",
              fontWeight: 900,
              padding: "3vh 2vw",
              textShadow: "0 6px 18px #123b",
            }}
          >
                   XINAI 
            <br />
            <span
              style={{
                fontSize: "1.15rem",
                color: "#f7ecca",
                fontWeight: 500,
                letterSpacing: "2.5px",
              }}
            >
              All Domains, One Vision
            </span>
          </div>
        </LayerCircle>
      )}
    </CirclesZone>
  );
}

export default function Demo() {
  return (
    <>
      <Header />
      <Wrapper>
        <h1
          style={{
            color: "#edf2f7",
            fontWeight: 800,
            fontSize: "2.2rem",
            margin: "2rem 0 1.5rem 0",
            letterSpacing: "2px",
          }}
        >
          Design Of Our Vision
        </h1>
        <ConcentricCircles />
        <div
          style={{
            color: "#bce0f7",
            maxWidth: 600,
            margin: "2.5rem auto 0",
            fontSize: "1rem",
            textAlign: "center",
            opacity: 0.85,
          }}
        >
          Scroll down to explore expertise across all AI technology areas—see the journey
          converge as you reach the end!
        </div>
        <div style={{ height: "180vh" }} /> {/* Spacer for scrolling */}
      </Wrapper>
    </>
  );
}
