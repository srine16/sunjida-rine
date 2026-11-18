
import React from "react";
import "./PageStyles.css";

export default function Contact() {
  return (
    <section className="page-section">
      <h1>Let's Connect</h1>

      <p>
        I'm interested in connecting with researchers,
        engineers, technology founders, and organisations
        working at the intersection of{" "}
        <strong>
          Artificial Intelligence, Cybersecurity,
          Software Engineering, and Emerging Technologies.
        </strong>
      </p>

      <p>
        Whether you're interested in AI research,
        technical collaboration, innovative software
        development, or exploring opportunities with{" "}
        <strong>Rineq Technologies</strong>,
        I'd be happy to hear from you.
      </p>

      <div className="contact-links">
        <a
          href="mailto:sunjidarine16@gmail.com?subject=Portfolio%20Enquiry"
          aria-label="Email Sunjida Rine"
        >
          📧 Email Me
        </a>

        <a
          href="https://github.com/srine16"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Sunjida Rine on GitHub"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sunjida-rine-5563851a4/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Sunjida Rine on LinkedIn"
        >
          🔗 LinkedIn
        </a>
      </div>

      <p style={{ marginTop: "2rem" }}>
        <strong>Research • Engineering • Innovation</strong>
      </p>
    </section>
  );
}
