import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/img/mee.jpg";
import spark from "../assets/img/spark.png"; // add your spark icon here

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <div className="about-content">
              <span className="about-year">2025</span>
              <h2>About Me</h2>

              <p>
                I'm Shreeti Bajracharya, a BSc CSIT student passionate about crafting
                elegant, meaningful, and user-friendly digital experiences. With a strong
                foundation in front-end development, basic DevOps, and data labeling, I
                enjoy turning ideas into responsive and visually polished web interfaces.
              </p>

              <p>
                I love solving problems, creating intuitive designs, and engaging with
                tech communities like Code for Change. I’m continuously learning and
                currently exploring machine learning and mental-health–focused
                technology to build solutions that genuinely help people.
              </p>
            </div>
          </Col>

          <Col md={5}>
            <div className="about-img-wrapper">
              <img src={spark} alt="spark" className="spark-icon" />
              <div className="about-img-arch">
                <img src={aboutImg} alt="Shreeti Bajracharya" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
