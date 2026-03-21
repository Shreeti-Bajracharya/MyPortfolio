import { Container, Row, Col } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ThemeContext } from "../context/ThemeContext";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import projImg4 from "../assets/img/projImg4.png";

export const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainProjects = [
    {
      title: "Innovation Hub – Hackathon Collaboration Platform",
      description:
        "Drupal 7.95 hackathon platform with idea submission, voting, moderation, and analytics, backed by Drupal SimpleTest automation for core workflows, DB checks, access control, and basic XSS prevention.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Shreeti-Bajracharya/InnovationHub",
      stacks: ["Drupal 7.95", "PHP", "MySQL", "SimpleTest"],
      category: "Fullstack",
    },
    {
      title: "Insurance Company System",
      description:
        "React-based insurance platform with multilingual UI and API integration. Focused on responsive UI, authentication flow validation, and functional/UI testing.",
      imgUrl: projImg2,
      liveUrl: "https://blue-shield-seven.vercel.app/",
      stacks: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "Frontend + Backend",
    },
    {
      title: "Clothing E-commerce System",
      description:
        "A full-featured MERN stack e-commerce platform with product catalog, advanced filtering, shopping cart, order management, and user authentication. Includes admin panel for inventory and order tracking.",
      imgUrl: projImg4,
      githubUrl: "https://github.com/Shreeti-Bajracharya/ecommerce-website",
      stacks: ["React", "Express.js", "MongoDB", "Redux"],
      category: "Fullstack",
    },
    {
      title: "Mental Health Chatbot & Consultation System",
      description:
        "An AI-powered mental health assistant integrating Gemini API, Sentence Transformer, also wrote manual test cases to verify response accuracy, severity classification, and user interaction flows.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Shreeti-Bajracharya/MentalHealthChatbot",
      stacks: ["React", "Python", "Gemini API", "Node.js"],
      category: "AI/ML + Frontend",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mainProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mainProjects.length) % mainProjects.length
    );
  };

  const currentProject = mainProjects[currentSlide];

  return (
    <section
      className={`project ${isDark ? "project-dark" : "project-light"}`}
      id="projects"
    >
      <Container>
        <Row>
          <Col>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subtitle">
              Explore the projects I've built and tested—showcasing expertise in
              fullstack development and modern technologies.
            </p>

            {/* Single Project Carousel */}
            <div className="single-project-carousel mt-5">
              {/* Navigation Buttons */}
              <button
                className={`carousel-nav carousel-nav-prev ${
                  isDark ? "carousel-nav-dark" : "carousel-nav-light"
                }`}
                onClick={prevSlide}
                aria-label="Previous project"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Project Card */}
              <div className="carousel-content">
                <ProjectCard project={currentProject} />
              </div>

              {/* Navigation Buttons */}
              <button
                className={`carousel-nav carousel-nav-next ${
                  isDark ? "carousel-nav-dark" : "carousel-nav-light"
                }`}
                onClick={nextSlide}
                aria-label="Next project"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Slide Counter & Indicators */}
            <div className="carousel-footer mt-5">
              <div className="carousel-counter">
                <span className="current-slide">{currentSlide + 1}</span>
                <span className="total-slides">/ {mainProjects.length}</span>
              </div>

              <div className="carousel-indicators">
                {mainProjects.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      currentSlide === index ? "active" : ""
                    } ${isDark ? "indicator-dark" : "indicator-light"}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to project ${index + 1}`}
                    title={mainProjects[index].title}
                  />
                ))}
              </div>

              <div className="carousel-progress">
                <div
                  className={`progress-bar ${isDark ? "progress-dark" : "progress-light"}`}
                  style={{
                    width: `${((currentSlide + 1) / mainProjects.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
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