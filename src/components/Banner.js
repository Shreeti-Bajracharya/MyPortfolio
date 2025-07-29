import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/coder.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                  <span className="tagline">Welcome</span>
                  <h1>
                    {'Hi, I am Shreeti Bajracharya'}
                    {/* <br /> */}
                    {/* <span className="wrap">Aspiring Software Developer</span> */}
                  </h1>
                  <p style={{ textAlign: "justify" }}>Aspiring Software Engineer</p>
                  <button onClick={() => console.log('connect')}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
