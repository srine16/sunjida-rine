
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import Modal from "./Modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Forest Guard — AI for Climate Action",
      year: "2025",
      status: "Completed",
      category: "AI & Sustainability",
      description:
        "An academic AI project focused on detecting deforestation patterns using satellite data and machine learning, aligned with UN SDG 13 (Climate Action).",
      tech: "Python, TensorFlow, Flask, OpenCV, React",
      link: null,
    },
    {
      title: "Brunel Sports — Student Management System",
      year: "2024",
      status: "Completed",
      category: "Software Engineering",
      description:
        "A university software engineering project focused on student and sports-related management, including record management, application workflows, and database integration.",
      tech: "Java, Spring Boot, MySQL, React",
      link: null,
    },
    {
      title: "Personal Portfolio Platform",
      year: "2026",
      status: "Ongoing Development",
      category: "Frontend Engineering",
      description:
        "A React-based personal portfolio showcasing my software engineering work, artificial intelligence projects, and ongoing research. Currently improving content, functionality, responsiveness, and deployment.",
      tech: "React, JavaScript, CSS3, AOS",
      link: "https://github.com/srine16/sunjida-rine",
    },
    {
      title: "SignBridge AI — British Sign Language Recognition",
      year: "2026",
      status: "Ongoing Development",
      category: "Computer Vision & Accessibility",
      description:
        "An AI accessibility project being developed to recognise selected British Sign Language signs using computer vision and translate recognised signs into readable text. The initial prototype will focus on a limited vocabulary and reliable recognition.",
      tech:
        "Python, OpenCV, MediaPipe, PyTorch, React (Planned Stack)",
      link: null,
    },
    {
      title: "ShadowTrace — AI Counter-Espionage System",
      year: "2026",
      status: "Ongoing Development",
      category: "Cybersecurity & AI Engineering",
      description:
        "A defensive cybersecurity software project exploring AI-assisted detection of suspicious processes, potential spyware activity, unusual network behaviour, and unauthorised data access in controlled testing environments.",
      tech:
        "Python, Network Analysis, Machine Learning, Cybersecurity (Planned Stack)",
      link: null,
    },
    {
      title: "AI-Driven Academic Recommender",
      year: "2023",
      status: "Previous Project — Under Review",
      category: "Machine Learning",
      description:
        "An earlier academic project exploring personalised learning resource recommendations through machine learning and natural language processing. Implementation details are being reviewed.",
      tech: "Python, Scikit-learn, Flask, Pandas",
      link: null,
    },
    {
      title: "Health Risk Prediction System",
      year: "2023",
      status: "Previous Project — Under Review",
      category: "AI & Healthcare",
      description:
        "An earlier machine learning project exploring predictive modelling for health-related data. Previous performance claims are being reviewed before publication.",
      tech: "Python, XGBoost, Django, SQL",
      link: null,
    },
    {
      title: "E-Commerce Web Application",
      year: "2022",
      status: "Previous Project — Under Review",
      category: "Software Engineering",
      description:
        "An earlier software engineering project exploring e-commerce application development, including authentication, inventory management, and transaction workflows.",
      tech: "React, Node.js, Express, MongoDB",
      link: null,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 data-aos="fade-up">Featured Projects</h1>

        <p data-aos="fade-up" data-aos-delay="150">
          Explore my completed software engineering projects
          and ongoing developments in artificial intelligence,
          cybersecurity, accessibility, and intelligent systems.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            
<div
  key={index}
  className="project-card"
  role="button"
  tabIndex={0}
  aria-label={`View details for ${project.title}`}
  data-aos="fade-up"
  data-aos-delay={200 + index * 100}
  onClick={() => setSelectedProject(project)}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedProject(project);
    }
  }}
>

              <div className="project-content">
                <h2>{project.title}</h2>

                <p className="category">
                  {project.category}
                </p>

                <p className="year">
                  {project.year}
                </p>

                {project.status && (
                  <p className="project-status">
                    {project.status}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
