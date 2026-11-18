
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "./profile.jpg";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate(); // ✅ Initialize navigation

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="home" className="home">
      {/* ====== Profile Section ====== */}
      <div className="profile-container" data-aos="fade-down">
        <div className="profile-ring">
          <img
            src={profilePic}
            alt="Portrait of Sunjida Rine"
            className="profile-pic"
          />
        </div>
      </div>

      {/* ====== Text Section ====== */}
      <h1 className="hero-name" data-aos="fade-up" data-aos-delay="100">
        Sunjida Rine
      </h1>
      <h3 className="hero-title" data-aos="fade-up" data-aos-delay="200">
        AI &amp; Security Engineer | Founder of Rineq Technologies
      </h3>

      <p className="hero-text" data-aos="fade-up" data-aos-delay="300">
        I’m a final-year <strong>BSc (Hons) Computer Science with
        Artificial Intelligence</strong> student at Brunel University
        London, focusing on <strong>AI Engineering, Cybersecurity,
        and Software Engineering</strong>. As the <strong>Founder
        of Rineq Technologies</strong>, I aim to build intelligent,
        secure, and resilient computing systems. My current research
        project, <strong>NeuroIntent</strong>, explores AI-driven
        interpretation of neural intentions and secure translation
        into computer actions.
      </p>

      {/* ====== Buttons Section ====== */}
      <div className="hero-buttons" data-aos="fade-up" data-aos-delay="500">
        <a
          href="/SUNJIDARineResume.pdf"
          download="Sunjida_Rine_CV.pdf"
          className="btn-primary"
        >
          📄 Download CV
        </a>

        {/* ✅ Fixed Explore Button */}
        <button
          className="btn-secondary"
          onClick={() => navigate("/about")}
        >
          ↓ Explore More
        </button>
      </div>
    </section>
  );
}
