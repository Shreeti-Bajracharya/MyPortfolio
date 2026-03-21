import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/coder.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Banner = () => {
  const { isDark } = useContext(ThemeContext);

  const handleConnect = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`banner ${isDark ? "banner-dark" : "banner-light"}`}
      id="home"
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">BSc CSIT Graduate</span>

            <h1>
              Hi, I'm <span className="highlight">Shreeti Bajracharya</span>
            </h1>

            <p className="banner-text">
              Aspiring Software Engineer
            </p>

            <button className="connect-btn" onClick={handleConnect}>
              Let's Connect <ArrowRightCircle size={20} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5} className="banner-img-col">
            <div className="banner-img-wrapper">
              <img
                src={headerImg}
                alt="Developer Illustration"
                className="banner-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};