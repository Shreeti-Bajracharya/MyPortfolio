import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/img/shreeti.jpeg";
import spark from "../assets/img/spark.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const About = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={`about ${isDark ? "about-dark" : "about-light"}`}
      id="about"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <div className="about-content">
              <span className="about-year">2025</span>
              <h2>About Me</h2>

              <p>
                I'm Shreeti Bajracharya, a BSc CSIT graduate with hands-on
                experience as a Web Development Intern, working primarily on
                frontend development using React.js, HTML, CSS, JavaScript, and
                Tailwind CSS, along with exposure to backend integration.
                Experienced in developing responsive UI components, supporting
                feature implementation, troubleshooting interface issues, and
                improving overall user experience. Also gained practical
                exposure to manual testing through UI validation, bug
                identification, and user flow testing, building a strong
                foundation in developing reliable, user-friendly, and
                high-quality software applications.
              </p>
            </div>
          </Col>

          <Col md={5}>
            <div className="about-img-wrapper">
              <div
                className={`about-img-arch ${isDark ? "about-img-dark" : "about-img-light"}`}
              >
                <img src={aboutImg} alt="Shreeti Bajracharya" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
