import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { ThemeContext } from "../context/ThemeContext";
import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDark ? "footer-dark" : "footer-light"}`}>
      <Container>
        <Row className="align-items-center py-4">
          <Col xs={12} sm={4} className="mb-4 mb-sm-0">
            <div className="footer-brand">
              <img src={logo} alt="Logo" className="footer-logo" />
            </div>
          </Col>

          <Col xs={12} sm={4} className="text-center mb-4 mb-sm-0">
            <div className="footer-social">
              <h6 className="footer-title">Follow Me</h6>
              <div className="social-icon footer-social-icons">
                <a 
                  href="https://www.linkedin.com/in/shreeti-bajracharya-b2878a33b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className={`social-link ${isDark ? "social-link-dark" : "social-link-light"}`}
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a 
                  href="https://www.facebook.com/shreeti.bajracharya.5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Facebook"
                  className={`social-link ${isDark ? "social-link-dark" : "social-link-light"}`}
                >
                  <img src={navIcon2} alt="Facebook" />
                </a>
                <a 
                  href="https://www.instagram.com/shreeti_bajracharya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Instagram"
                  className={`social-link ${isDark ? "social-link-dark" : "social-link-light"}`}
                >
                  <img src={navIcon3} alt="Instagram" />
                </a>
                <a 
                  href="https://github.com/Shreeti-Bajracharya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub"
                  className={`social-link ${isDark ? "social-link-dark" : "social-link-light"}`}
                >
                  <img src={navIcon4} alt="GitHub" />
                </a>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={4} className="text-center text-sm-end">
            <button 
              className={`scroll-to-top ${isDark ? "scroll-to-top-dark" : "scroll-to-top-light"}`}
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to top"
            >
              <FaArrowUp size={18} />
            </button>
          </Col>
        </Row>

        <hr className={`footer-divider ${isDark ? "divider-dark" : "divider-light"}`} />

        <Row className="align-items-center py-3">
          <Col xs={12} className="text-center">
            <p className={`footer-copyright ${isDark ? "copyright-dark" : "copyright-light"}`}>
              © {currentYear} Shreeti Bajracharya. All Rights Reserved.
            </p>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
};