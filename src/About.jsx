
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import profilePic from "./profile.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* ===== Left Side: Image & Info Card ===== */}
        <div className="about-left" data-aos="fade-right">
          <div className="about-card">
            <img
              src={profilePic}
              alt="Sunjida Rine"
              className="about-image"
            />
            <h2>Sunjida Rine</h2>
            <p>
              BSc (Hons) Computer Science with Artificial Intelligence
            </p>
            <p>Brunel University London</p>
          </div>
        </div>

        {/* ===== Right Side: Description ===== */}
        <div className="about-right" data-aos="fade-left">
          <h1>About Me</h1>

          <p>
            I'm a final-year <strong>BSc (Hons) Computer Science
            with Artificial Intelligence</strong> student at
            Brunel University London, focusing on{" "}
            <strong>
              AI Engineering, Cybersecurity, and Software Engineering
            </strong>.
            My interests lie in developing intelligent,
            secure, and reliable computing systems that
            address real-world challenges.
          </p>

          <p>
            My technical experience includes{" "}
            <strong>
              Python, Java, JavaScript, React, Spring Boot,
              SQL, and Machine Learning
            </strong>.
            I'm particularly interested in neural computing,
            adversarial machine learning, secure AI systems,
            and software architecture.
          </p>

          <p>
            My current final-year research project,{" "}
            <strong>NeuroIntent</strong>, investigates an
            AI-driven neural-computer architecture for
            interpreting internally generated human intentions
            and translating them into secure, context-aware
            computer actions.
          </p>

          <p>
            I'm the <strong>Founder of Rineq Technologies</strong>,
            a developing deep-technology venture focused on{" "}
            <strong>
              AI automation software, cybersecurity solutions,
              and advanced artificial intelligence research
            </strong>.
            My longer-term research roadmap includes
            IntentShield, TrustMesh, and advanced
            behavioural-neural computing.
          </p>

          <div className="about-highlight">
            💡 <em>
              Building towards a career in AI and Security
              Engineering through research, practical
              software development, and technology entrepreneurship.
            </em>
          </div>
        </div>
      </div>
    </section>
  );
}
