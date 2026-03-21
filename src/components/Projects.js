import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ThemeContext } from "../context/ThemeContext";

import projImg16 from "../assets/img/projImg16.png";
import projImg17 from "../assets/img/projImg17.png";
import projImg18 from "../assets/img/projImg18.png";
import projImg19 from "../assets/img/projImg19.png";

export const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  const mainProjects = [
            {
      title: "Innovation Hub – Hackathon Collaboration Platform",
      description:
        "Drupal 7.95 hackathon platform with idea submission, voting, moderation, and analytics—backed by Drupal SimpleTest automation for core workflows, DB checks, access control, and basic XSS prevention.",
      // If you have a screenshot, replace with projImg20
      imgUrl: projImg18,
      githubUrl: "https://github.com/Shreeti-Bajracharya/InnovationHub",
    },
    {
      title: "Insurance Company System",
      description:
        "React-based insurance platform with multilingual UI and API integration. Focused on responsive UI, authentication flow validation, and functional/UI testing.",
      imgUrl: projImg19,
      liveUrl: "https://blue-shield-seven.vercel.app/",
    },
    {
      title: "Clothing E-commerce System",
      description:
        "MERN e-commerce platform with product listing, cart, and order management. Practiced end-to-end workflow testing and basic API validation for key user flows.",
      imgUrl: projImg17,
      liveUrl:
        "https://frontend-ka7mvcglf-shreeti-bajracharyas-projects.vercel.app/",
    },
    {
      title: "Mental Health Assistant System",
      description:
        "Academic project with chatbot integration and appointment system. Wrote manual test cases to verify chatbot responses and tested core interaction flows for accuracy.",
      imgUrl: projImg18,
      githubUrl: "",
    },
  ];

  return (
    <section
      className={`project ${isDark ? "project-dark" : "project-light"}`}
      id="projects"
    >
      <Container>
        <Row>
          <Col>
            <h2 className="section-heading">Projects</h2>
            <p className="section-subtitle">
              A curated collection of projects I’ve built and tested—focused on
              responsive UI, reliable workflows, and quality-driven development.
            </p>

            <Row className="mt-5">
              {mainProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};