
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Research.css";

export default function Research() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const researchProjects = [
    {
      title: "NeuroIntent — Neural Computer Architecture",
      year: "2026–2027 | In Development",
      focus:
        "A Neural Computer Architecture for Translating Internally Generated Human Intentions into Computer Actions. This final-year research project investigates EEG-based intention decoding, computer-context fusion, confidence gating, and secure action translation.",
      tools:
        "Python, Machine Learning, Deep Learning, EEG Signal Processing, Context-Aware AI",
      impact:
        "Research objective: Design and evaluate an AI-driven neural-computer prototype that interprets internally generated intentions and translates predictions into context-appropriate computer actions while controlling uncertainty and false actions.",
    },
    {
      title: "IntentShield — Adversarially Robust Behavioural AI",
      year: "Paper 1 | Active Research & Development",
      focus:
        "Adversarially Robust AI for Concealed-Intent and Behavioural Conflict Detection. Investigates whether observable interaction patterns can reveal behavioural inconsistencies, uncertainty, or deliberate manipulation in controlled, consent-based experiments.",
      tools:
        "Machine Learning, Adversarial ML, Human–Computer Interaction, Explainable AI, Behavioural Computing",
      impact:
        "Research objective: Develop an uncertainty-aware system that evaluates conflicting behavioural evidence, tests robustness against manipulation, and identifies when human review is required without claiming to know a person's hidden intentions.",
    },
    {
      title: "TrustMesh — Self-Healing Secure Edge AI",
      year: "Paper 2 | Active Research & Development",
      focus:
        "Self-Healing Secure Edge AI for Critical Systems Under Network Failure and Cyberattack. Investigates distributed AI infrastructure that detects unreliable nodes and dynamically redistributes workloads during failures, disconnections, or cyber disruption.",
      tools:
        "Distributed Systems, Edge Computing, Cloud Computing, Cybersecurity, AI, Resilient Systems",
      impact:
        "Research objective: Evaluate service availability, recovery time, latency, workload migration, resource efficiency, scalability, and resilience under multiple simultaneous failures.",
    },
    {
      title: "NeuroIntent Advanced — Behavioural-Neural Fusion",
      year: "Paper 3 | Active Research & Development",
      focus:
        "Secure Real-Time Fusion of Behavioural and Neural Signals for Anticipatory Human–Computer Interaction. Proposes a behavioural-first AI architecture that uses neural evidence selectively when behavioural inference becomes ambiguous or contradictory.",
      tools:
        "Multimodal AI, Human–Computer Interaction, EEG, Behavioural Computing, HPC, Cybersecurity",
      impact:
        "Research objective: Investigate whether selective neural processing, uncertainty-aware multimodal fusion, and secure decision support can improve intention interpretation while reducing unnecessary computational cost and latency.",
    },
  ];

  return (
    <section id="research" className="research-section">
      <div className="research-container">
        <h1 data-aos="fade-up">Research & Innovation</h1>
        <p data-aos="fade-up" data-aos-delay="150">
          My research interests span{" "}
          <strong>Artificial Intelligence</strong>,{" "}
          <strong>Cybersecurity</strong>,{" "}
          <strong>Neural Computing</strong>, and{" "}
          <strong>Secure Distributed Systems</strong>.
          I aim to develop intelligent, trustworthy,
          and resilient technologies through practical
          experimentation and interdisciplinary research.
        </p>

        <div className="research-grid">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="research-card"
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
            >
              <div className="research-header">
                <h2>{project.title}</h2>
                <span className="year">{project.year}</span>
              </div>
              <p className="focus">{project.focus}</p>
              <p className="tools">
                <strong>Tools / Research Areas:</strong> {project.tools}
              </p>
              <p className="impact">{project.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
