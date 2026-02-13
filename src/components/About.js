import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/img/shreeti.jpeg";
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
                I'm Shreeti Bajracharya, a final-year BSc CSIT student with
                experience as a Frontend Intern working with React.js. I have
                built responsive UI components, integrated REST APIs, and worked
                on improving application functionality.
              </p>

              <p>
                Along with development, I have a strong interest in Software
                Quality Assurance. I enjoy testing applications, validating APIs
                using Postman, and ensuring that features work correctly and
                reliably. I am detail-oriented, eager to learn, and motivated to
                grow as a QA professional while understanding how software is
                both built and tested.
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
