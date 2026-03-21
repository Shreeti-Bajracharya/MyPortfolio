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
                I'm Shreeti Bajracharya, a BSc CSIT graduate with hands-on experience as a Frontend Intern working
                with React.js, HTML, CSS, and Tailwind CSS. During my
                internship, I built responsive UI components, supported feature
                implementation, and helped troubleshoot UI issues to improve
                overall usability.
              </p>

              <p>
                I’m now focused on building my career in Software Quality
                Assurance and am excited about opportunities like the QA Trainee
                role. I enjoy translating requirements into clear test
                scenarios, identifying UI and functional issues, and validating
                REST APIs using Postman/Thunder Client. I’m detail-oriented,
                eager to learn QA best practices (Agile workflows, bug tracking,
                and test planning), and motivated to collaborate with developers
                to help deliver reliable, high-quality web applications.
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
