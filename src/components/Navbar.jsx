import React, { useState, useEffect } from "react";
import logo from "../assets/logo_veecious.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navSections = [
    "home",
    "about",
    "services",
    "training",
    "contact",
  ];

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when a link is clicked
  const handleLinkClick = () => setSidebarOpen(false);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-inner container">
          {/* Logo */}
          <a href="#home" className="logo-container">
            <img src={logo} alt="Veecious Security Logo" className="logo-img" />
            <h1 className="logo-text">
              VEECIOUS <span className="accent">SECURITY</span>
            </h1>
          </a>

          {/* Desktop nav */}
          <ul className="nav-links">
            {navSections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger for mobile */}
          <div
            className={`hamburger ${sidebarOpen ? "open" : ""}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Mobile Sidebar */}
          <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
            {navSections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={handleLinkClick}
                className={activeSection === id ? "active" : ""}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          {/* Overlay behind sidebar */}
          <div
            className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
            onClick={() => setSidebarOpen(false)}
          ></div>
        </div>
      </nav>
    </header>
  );
}
