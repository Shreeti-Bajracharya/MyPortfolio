import { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import { ThemeContext } from "../context/ThemeContext";

export const Skills = () => {
  const { isDark } = useContext(ThemeContext);

  const skillsData = [
    { name: "Manual Testing (Test Cases, Bug Reporting, UI Testing)", level: 75 },
    { name: "API Testing (Postman / Thunder Client)", level: 70 },
    { name: "HTML, CSS, JavaScript", level: 80 },
    { name: "React.js (Responsive UI Development)", level: 75 },
    { name: "Git & GitHub (Version Control)", level: 70 },
  ];

  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-progress");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = `${bar.dataset.level}%`;
            bar.classList.add("animate-bar");
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

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
              <h2>Skills Overview</h2>
              <p>Quality-focused skills from development to testing</p>

              <div className="skills-list">
                {skillsData.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-level={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};