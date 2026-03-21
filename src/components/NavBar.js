import { useEffect, useState, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Sun, Moon } from "react-bootstrap-icons";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { ThemeContext } from "../context/ThemeContext";

export const NavBar = () => {
  const { isDark, toggleTheme, activeLink, setActiveLink } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar 
      expand="lg" 
      className={`navbar-custom ${scrolled ? "scrolled" : ""} ${isDark ? "navbar-dark-mode" : "navbar-light-mode"}`}
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <img src={logo} alt="Logo" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeLink === "about" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shreeti-bajracharya-b2878a33b/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/shreeti.bajracharya.5/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/shreeti_bajracharya/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="https://github.com/Shreeti-Bajracharya" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="GitHub" />
              </a>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark/light mode">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="connect-btn-nav"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};