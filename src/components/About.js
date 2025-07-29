import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/img/mee.jpg"; // Your image file

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
                I'm Shreeti Bajracharya, a BSc CSIT student passionate about building elegant and meaningful digital experiences. With a solid foundation in front-end development, basic DevOps, and data labeling, I strive to turn ideas into interactive, responsive, and inclusive web applications.
              </p>
              <p>
                I enjoy problem-solving, collaborating with tech communities like Code for Change, and continuously learning to improve my skills. Currently, I’m exploring machine learning and mental health-related tech solutions.
              </p>
              {/* <div className="about-footer">
                <span>2 | AS A DEVELOPER</span>
                <hr />
              </div> */}
            </div>
          </Col>
          <Col md={5}>
            <div className="about-img-wrapper">
              <img src="" alt="design" className="spark-icon" />
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
