import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaCheckCircle,
  FaServer,
} from "react-icons/fa";
import { SiPostman } from "react-icons/si";

export const Skills = () => {
  const { isDark } = useContext(ThemeContext);

  const skillsData = [
    { name: "HTML5", icon: FaHtml5, color: "#E34C26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Git/GitHub", icon: FaGitAlt, color: "#F1502F" },
    { name: "API Testing", icon: SiPostman, color: "#FF6C37" },
    { name: "Manual Testing", icon: FaCheckCircle, color: "#4CAF50" },
    { name: "Node.js", icon: FaServer, color: "#339933" },
  ];

  return (
    <section
      className={`skill ${isDark ? "skill-dark" : "skill-light"}`}
      id="skills"
    >
      <Container>
        <Row>
          <Col>
            <div
              className={`skill-bx ${isDark ? "skill-bx-dark" : "skill-bx-light"}`}
            >
              <div className="skill-header">
                <h2>Skills & Expertise</h2>
                <p className="skill-subtitle">Modern tech stack & Testing expertise</p>
              </div>

              <div className="skills-grid-container">
                {skillsData.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className={`modern-skill-card ${
                        isDark ? "skill-card-dark" : "skill-card-light"
                      }`}
                      style={{ animationDelay: `${index * 0.06}s` }}
                    >
                      {/* Background gradient orb */}
                      <div className="skill-glow"></div>

                      {/* Main content */}
                      <div className="skill-content">
                        <div
                          className="skill-icon-wrapper"
                          style={{
                            background: isDark
                              ? `linear-gradient(135deg, rgba(${hexToRgb(skill.color)}, 0.15), rgba(${hexToRgb(skill.color)}, 0.05))`
                              : `linear-gradient(135deg, rgba(${hexToRgb(skill.color)}, 0.12), rgba(${hexToRgb(skill.color)}, 0.03))`,
                            borderColor: skill.color,
                          }}
                        >
                          <Icon
                            className="skill-icon"
                            style={{ color: skill.color }}
                          />
                        </div>

                        <h4 className="skill-card-name">{skill.name}</h4>
                      </div>

                      {/* Hover accent bar */}
                      <div
                        className="skill-accent-bar"
                        style={{ backgroundColor: skill.color }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : "0, 0, 0";
}