import { Container, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import contactImg from "../assets/img/contact-img.png";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

export const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();
      setButtonText("Send Message");
      setIsLoading(false);

      if (result.code === 200) {
        setStatus({
          success: true,
          message: "✅ Message sent successfully! I'll get back to you soon.",
        });
        setFormDetails({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          success: false,
          message:
            result.message || "❌ Something went wrong. Please try again.",
        });
      }

      setTimeout(() => setStatus({}), 5000);
    } catch (error) {
      setButtonText("Send Message");
      setIsLoading(false);
      setStatus({
        success: false,
        message: "❌ Network error. Make sure the server is running (npm run dev)",
      });
      console.error("Error:", error);
    }
  };

  return (
    <section className={`contact ${isDark ? "contact-dark" : "contact-light"}`} id="contact">
      <Container>
        <h2 className="text-center mb-5">Get In Touch</h2>

        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={contactImg} alt="Contact Illustration" className="contact-img" />
          </Col>

          <Col md={6}>
            <p className="contact-intro">
              I'm always open to new opportunities, collaborations, and interesting projects. 
              Feel free to reach out if you'd like to connect or discuss how I can contribute to your team!
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col sm={6} className="mb-3">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    className={`form-input ${isDark ? "form-input-dark" : "form-input-light"}`}
                    required
                    disabled={isLoading}
                  />
                </Col>

                <Col sm={6} className="mb-3">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    className={`form-input ${isDark ? "form-input-dark" : "form-input-light"}`}
                    disabled={isLoading}
                  />
                </Col>

                <Col sm={6} className="mb-3">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    className={`form-input ${isDark ? "form-input-dark" : "form-input-light"}`}
                    required
                    disabled={isLoading}
                  />
                </Col>

                <Col sm={6} className="mb-3">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No. (Optional)"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    className={`form-input ${isDark ? "form-input-dark" : "form-input-light"}`}
                    disabled={isLoading}
                  />
                </Col>

                <Col className="mb-3">
                  <textarea
                    rows="5"
                    value={formDetails.message}
                    placeholder="Your Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className={`form-textarea ${isDark ? "form-input-dark" : "form-input-light"}`}
                    required
                    disabled={isLoading}
                  />
                </Col>

                <Col>
                  <button
                    type="submit"
                    className={`submit-btn ${isDark ? "submit-btn-dark" : "submit-btn-light"}`}
                    disabled={isLoading}
                  >
                    {buttonText}
                  </button>
                </Col>

                {status.message && (
                  <Col className="mt-3">
                    <p
                      className={`status-message ${
                        status.success ? "status-success" : "status-danger"
                      }`}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>

            <div className="contact-links mt-4 pt-4 border-top">
              <p className="text-muted small">Or reach out directly:</p>
              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="mailto:shreetibajracharya73@gmail.com"
                  className={`contact-btn ${isDark ? "contact-btn-dark" : "contact-btn-light"}`}
                  title="Send Email"
                >
                  <FaEnvelope className="icon" /> Email
                </a>

                <a
                  href="https://www.linkedin.com/in/shreeti-bajracharya-b2878a33b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-btn ${isDark ? "contact-btn-dark" : "contact-btn-light"}`}
                  title="Connect on LinkedIn"
                >
                  <FaLinkedin className="icon" /> LinkedIn
                </a>

                <a
                  href="https://github.com/Shreeti-Bajracharya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-btn ${isDark ? "contact-btn-dark" : "contact-btn-light"}`}
                  title="View GitHub Profile"
                >
                  <FaGithub className="icon" /> GitHub
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};