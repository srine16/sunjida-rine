
import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
        style={{
          backgroundColor: "#0d1117",
          color: "#e6edf3",
          padding: "2rem",
          borderRadius: "12px",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "85vh",
          overflowY: "auto",
          boxShadow: "0 0 25px rgba(88, 166, 255, 0.3)",
        }}
      >
        <h2
          id="project-modal-title"
          style={{
            color: "#58a6ff",
            marginBottom: "1rem",
          }}
        >
          {project.title}
        </h2>

        <p>
          <strong>Category:</strong> {project.category}
        </p>

        <p>
          <strong>Year:</strong> {project.year}
        </p>

        {project.status && (
          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: "#3fb950" }}>
              {project.status}
            </span>
          </p>
        )}

        <p>
          <strong>Technologies:</strong> {project.tech}
        </p>

        <p style={{ marginTop: "1rem" }}>
          {project.description}
        </p>

        {project.link && (
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#58a6ff",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              🔗 View on GitHub
            </a>
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#238636",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
