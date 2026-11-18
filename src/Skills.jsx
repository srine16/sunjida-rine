
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    {
      category: "Artificial Intelligence & Intelligent Systems",
      items: [
        "AI Systems Architecture",
        "Context-Aware Intelligent Systems",
        "Knowledge Representation & Reasoning",
        "Probabilistic Inference",
        "Decision-Making Under Uncertainty",
        "Human-Centred AI",
        "Explainable & Trustworthy AI",
        "Intelligent Automation",
      ],
    },
    {
      category: "Advanced Machine Learning",
      items: [
        "Supervised & Unsupervised Learning",
        "Ensemble Learning Methods",
        "Feature Selection & Engineering",
        "Hyperparameter Optimisation",
        "Cross-Validation & Model Selection",
        "Probability Calibration",
        "Uncertainty Quantification",
        "Model Robustness & Generalisation",
        "Statistical Performance Evaluation",
      ],
    },
    {
      category: "Deep Learning & Neural Architectures",
      items: [
        "Artificial Neural Networks",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "Transformers & Attention Mechanisms",
        "Representation Learning",
        "Transfer Learning",
        "Neural Network Optimisation",
        "Regularisation & Generalisation",
        "TensorFlow, Keras & PyTorch",
      ],
    },
    {
      category: "Generative AI & LLM Systems",
      items: [
        "Large Language Model Architectures",
        "Retrieval-Augmented Generation",
        "Vector Embeddings & Semantic Search",
        "AI Agent Architectures",
        "Tool-Augmented AI Workflows",
        "LLM Evaluation & Reliability",
        "Prompt-Injection Threat Modelling",
        "Secure Generative AI Systems",
      ],
    },
    {
      category: "AI Security & Adversarial Machine Learning",
      items: [
        "Adversarial Threat Modelling",
        "Model Evasion & Robustness",
        "Data Poisoning Threats",
        "Adversarial Input Detection",
        "Secure Model Inference",
        "Confidence-Based Decision Gating",
        "Robustness Benchmarking",
        "AI System Security Architecture",
        "Human-in-the-Loop Security Controls",
      ],
    },
    {
      category: "Advanced Cybersecurity Engineering",
      items: [
        "Threat Modelling & Risk Assessment",
        "Security Architecture & Defence-in-Depth",
        "MITRE ATT&CK Framework",
        "Cyber Kill Chain Analysis",
        "Network Threat Detection",
        "Digital Forensics & Incident Analysis",
        "Vulnerability Assessment",
        "Identity & Access Management",
        "Zero Trust Security Principles",
        "Security Monitoring & Detection Engineering",
      ],
    },
    {
      category: "Cloud Security & DevSecOps",
      items: [
        "Secure Cloud Architecture",
        "Infrastructure-as-Code Security",
        "Static Application Security Testing",
        "Software Supply Chain Security",
        "CI/CD Pipeline Security",
        "Container Security Architecture",
        "Secure Configuration Management",
        "Cloud Identity & Access Controls",
        "Checkov & Security Automation",
        "Security Compliance Fundamentals",
      ],
    },
    {
      category: "Software Engineering & System Architecture",
      items: [
        "Object-Oriented Design",
        "SOLID Principles & Design Patterns",
        "Modular Software Architecture",
        "Distributed Systems Architecture",
        "Microservices & Service-Oriented Design",
        "RESTful API Architecture",
        "Concurrent & Asynchronous Processing",
        "Software Requirements Engineering",
        "Software Testing & Quality Assurance",
        "Performance & Reliability Engineering",
      ],
    },
    {
      category: "Backend, Full-Stack & Database Engineering",
      items: [
        "React Application Architecture",
        "Java & Spring Boot",
        "Python & Flask",
        "Node.js & Express.js",
        "REST API Development",
        "Authentication & Authorisation",
        "Relational Database Design",
        "SQL Query Design",
        "MySQL & MongoDB",
        "Secure Application Integration",
      ],
    },
    {
      category: "MLOps & AI Infrastructure",
      items: [
        "End-to-End ML Pipeline Design",
        "Reproducible ML Experiments",
        "Model Versioning & Experiment Tracking",
        "ML Deployment Architectures",
        "Model Monitoring & Drift Detection",
        "Automated Model Evaluation",
        "Containerised ML Applications",
        "CI/CD for Machine Learning",
        "Inference Performance Optimisation",
      ],
    },
    {
      category: "Neural Computing & Advanced HCI",
      items: [
        "Brain–Computer Interface Architecture",
        "EEG Signal Processing",
        "Neural Intention Decoding",
        "Context-Aware Intention Interpretation",
        "Multimodal Signal Fusion",
        "Confidence Gating & Decision Control",
        "Secure Human–Computer Interaction",
        "Neural Interface Threat Modelling",
        "Real-Time Intelligent Interaction",
      ],
    },
    {
      category: "Computer Vision & Accessibility AI",
      items: [
        "Computer Vision Architectures",
        "Image Classification",
        "Visual Feature Extraction",
        "Hand & Pose Landmark Detection",
        "Temporal Gesture Recognition",
        "Multimodal Interaction Design",
        "Accessibility-Centred AI",
        "Computer Vision Model Evaluation",
      ],
    },
    {
      category: "Programming, Frameworks & Engineering Tools",
      items: [
        "Python, Java, JavaScript & R",
        "SQL, HTML5 & CSS3",
        "React & Spring Boot",
        "Flask, Node.js & Express.js",
        "TensorFlow, Keras & PyTorch",
        "Scikit-learn, Pandas & NumPy",
        "Git, GitHub & Version Control",
        "Linux, PowerShell & Command-Line Tools",
        "VS Code, IntelliJ IDEA & RStudio",
        "Postman & API Testing",
      ],
    },
    {
      category: "Technical Leadership & Entrepreneurship",
      items: [
        "Technology Strategy & Product Vision",
        "Research & Development Planning",
        "Engineering Roadmap Development",
        "System Architecture Trade-Off Analysis",
        "Technical Decision-Making",
        "Innovation & Product Discovery",
        "Project Prioritisation & Risk Management",
        "Cross-Functional Collaboration",
        "Technical Communication",
        "Research-to-Product Development",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 data-aos="fade-up">
          Technical Specialisations & Engineering Capabilities
        </h1>

        <p data-aos="fade-up" data-aos-delay="150">
          My engineering focus spans{" "}
          <strong>Artificial Intelligence</strong>,{" "}
          <strong>Machine Learning</strong>,{" "}
          <strong>Deep Learning</strong>,{" "}
          <strong>Cybersecurity</strong>, and{" "}
          <strong>Advanced Software Engineering</strong>.
          These specialisations bring together technologies
          applied in my academic projects and advanced
          technical areas I am developing through research,
          experimentation, and independent engineering.
        </p>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="zoom-in"
              data-aos-delay={200 + index * 100}
            >
              <h3>{skillGroup.category}</h3>

              <ul>
                {skillGroup.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
