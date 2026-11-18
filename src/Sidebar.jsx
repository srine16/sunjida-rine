
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaBookOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((previousState) => !previousState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navigationItems = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/about", label: "About", icon: FaUser },
    {
      path: "/projects",
      label: "Projects",
      icon: FaProjectDiagram,
    },
    { path: "/skills", label: "Skills", icon: FaTools },
    {
      path: "/research",
      label: "Research",
      icon: FaBookOpen,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: FaEnvelope,
    },
  ];

  return (
    <>
      {/* ===== Mobile Navigation Button ===== */}
      <button
        type="button"
        className="hamburger"
        onClick={toggleMenu}
        aria-label={
          isOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isOpen}
        aria-controls="main-sidebar"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* ===== Sidebar Navigation ===== */}
      <nav
        id="main-sidebar"
        className={`sidebar ${isOpen ? "open" : ""}`}
        aria-label="Main navigation"
      >
        <h2 className="sidebar-title">Sunjida Rine</h2>

        <ul>
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                >
                  <Icon className="icon" aria-hidden="true" />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
