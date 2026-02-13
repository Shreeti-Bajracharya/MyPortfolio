import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/coder.png";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Final-Year BSc CSIT Student</span>

            <h1>
              Hi, I'm <span className="highlight">Shreeti Bajracharya</span>
            </h1>

            <p className="banner-text">
              Frontend Developer with experience in React.js and a strong
              interest in Software Quality Assurance. Passionate about
              building reliable and user-friendly web applications.
            </p>

            <button
              className="connect-btn"
              onClick={() => (window.location = "#connect")}
            >
              Let’s Connect <ArrowRightCircle size={20} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Developer Illustration" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
