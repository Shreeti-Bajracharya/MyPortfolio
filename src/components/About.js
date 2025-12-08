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
  I'm Shreeti Bajracharya, a final-year BSc CSIT student with a strong interest in both
  software development and quality assurance. I have hands-on experience with front-end
  development using React.js and basic backend concepts, along with foundational knowledge
  of software testing and API validation using Postman.
</p>

<p>
  I enjoy building user interfaces as well as ensuring that applications work correctly
  and reliably. I am detail-oriented, eager to learn, and interested in understanding both
  how software is built and how it is tested. Through projects and internships, I’m
  continuously improving my skills while working in real development environments and
  collaborating with teams.
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
