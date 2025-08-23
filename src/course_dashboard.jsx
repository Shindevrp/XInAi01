
import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { motion } from "framer-motion";
import "./components/ui/ui.css";
import { Link } from 'react-router-dom';

const courses = [
  {
    title: "Foundational AI & Data",
    description: "Python, Statistics, Linear Algebra, Probability, SQL"
  },
  {
    title: "Machine Learning",
    description: "ML algorithms, Scikit-learn, Evaluation, Model Deployment"
  },
  {
    title: "Deep Learning",
    description: "Neural Nets, CNNs, RNNs, Transformers"
  },
  {
    title: "MLOps & Industry Stack",
    description: "MLflow, Kubernetes, Docker, CI/CD, Monitoring"
  },
  {
    title: "NLP",
    description: "Natural Language Processing"
  },
  {
    title: "Computer Vision",
    description: "Vision models, CNNs, Object Detection"
  },
  {
    title: "Generative AI",
    description: "GANs, Diffusion Models, LLMs"
  }
];


export default function CourseDashboard() {
  const [message, setMessage] = useState("");

  const handleClick = (course) => {
    setMessage(`The ${course} course is currently under development. We will be updating it soon.`);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <nav className="dashboard-navbar">
        <div className="dashboard-navbar-inner">
          <div className="dashboard-navbar-logo">XinAI</div>
          <ul className="dashboard-navbar-links">
            <li>
              <Link to="/demo" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            </li>
            <li>Courses</li>
            <li>Community</li>
            <li>For Business</li>
            <li>Profile</li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-title">Explore AI Learning Tracks</div>
        <div className="dashboard-header-desc">
          Learn step by step, from foundational concepts to advanced AI industry practices.
        </div>
      </header>

      {/* Courses Grid */}
      <main style={{ flex: 1 }}>
        <div className="dashboard-courses-grid">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card onClick={() => handleClick(course.title)}>
                <CardContent>
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{ position: 'fixed', bottom: 24, right: 24, background: '#222', color: '#fff', padding: '16px 28px', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.12)', fontSize: 15 }}
          >
            {message}
          </motion.div>
        )}
      </main>

      {/* Footer */}
      {/* <footer className="dashboard-footer">
        <div className="dashboard-footer-inner">
          <div>© {new Date().getFullYear()} AI Learning Hub. All rights reserved.</div>
          <div className="dashboard-footer-links">
            <button type="button">Privacy Policy</button>
            <button type="button">Terms of Service</button>
            <button type="button">Contact</button>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
