import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skillsData = [
    { name: "Web Development", level: 90 },
    { name: "QA Testing", level: 75 },
    { name: "Problem Solving", level: 85 },
    { name: "Data Specialization", level: 70 },
  ];

  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-progress");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.dataset.level + "%";
            bar.classList.add("animate-bar");
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBars.forEach((bar) => observer.observe(bar));
  }, []);

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills Overview</h2>
              <p>What I Bring to the Table</p>

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
                      ></div>
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
