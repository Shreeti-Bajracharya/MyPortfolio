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
import projImg5 from "../assets/img/projImg5.png";

export const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainProjects = [
    {
      title: "Innovation Hub – Drupal-Based Hackathon Management Platform",
      description:
        "Architected a comprehensive Drupal 7.95 content management system with custom PHP modules for hackathon event collaboration. Implemented entity reference relationships, taxonomy-based classification (Technology, Category, Difficulty), and a custom voting system with trending analytics. Developed automated testing using SimpleTest, database validation workflows, and role-based access control (permissions framework). Built Views for dynamic content filtering and display, integrated Webform for user submissions, and created activity logging using Drupal's watchdog system.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Shreeti-Bajracharya/InnovationHub",
      stacks: ["Drupal 7.95", "PHP", "MySQL", "SimpleTest", "Custom Modules"],
      category: "Backend/CMS",
    },
    {
      title: "Insurance Company Platform – Multi-Tier Digital System",
      description:
        "Developed a full-stack insurance platform with React.js frontend and Node.js backend, featuring multilingual support (i18n internationalization), responsive design with Tailwind CSS, and seamless API integration. Implemented secure JWT-based authentication workflows, premium calculation engine with dynamic vehicle form handling (Comprehensive & Third-Party coverage), document management system, and role-based admin dashboard. Integrated animated UI components using Framer Motion, state management with React hooks, and real-time claim intimation module. Frontend deployed on Vercel with production-level error handling and axios interceptors.",
      imgUrl: projImg2,
      liveUrl: "https://blue-shield-seven.vercel.app/",
      stacks: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
        "JWT Auth",
      ],
      category: "Fullstack",
    },
    {
      title: "E-commerce Platform – MERN Stack Implementation",
      description:
        "Built a complete MERN stack e-commerce application with MongoDB database design, Express.js RESTful API backend, and React.js responsive frontend. Implemented product catalog with dynamic filtering system, shopping cart functionality with state management, secure user authentication with password encryption, and admin dashboard for inventory and order tracking. Developed middleware for route protection, error handling, and request validation. Features include user profile management, order history, payment integration preparation, and responsive UI/UX for mobile and desktop platforms.",
      imgUrl: projImg4,
      githubUrl: "https://github.com/Shreeti-Bajracharya/ecommerce-website",
      stacks: ["MongoDB", "Express.JS", "ReactJS", "NodeJS", "RESTful APIs"],
      category: "Fullstack",
    },
    {
      title: "Mental Health Chatbot – AI-Powered Consultation System",
      description:
        "Engineered an AI-driven chatbot integrating Google's Gemini API for mental health support and consultation. Implemented response validation algorithms, severity classification system for user inputs, and structured conversation flow management. Developed HTML/CSS frontend with Python backend service integration, comprehensive testing for interaction scenarios, and user data handling with privacy considerations. System demonstrates proficiency in AI/ML API integration, natural language processing interaction design, and building scalable AI applications.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Shreeti-Bajracharya/MentalHealthChatbot",
      stacks: ["Python", "Gemini API", "HTML", "CSS", "AI/ML Integration"],
      category: "AI/ML + Frontend",
    },
    {
      title: "Amazon Clone – Frontend E-Commerce Interface",
      description:
        "Developed a pixel-perfect e-commerce interface replicating core Amazon features using HTML, CSS, and JavaScript. Implemented responsive product listings grid, interactive shopping cart with add/remove functionality, and dynamic price calculations. Designed semantic HTML structure for accessibility, styled responsive layouts that adapt to mobile and desktop viewports, and created JavaScript event handlers for user interactions. Project demonstrates proficiency in front-end fundamentals, responsive web design, DOM manipulation, and building maintainable UI components.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/Shreeti-Bajracharya/amazon_clone",
      stacks: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Frontend",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mainProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mainProjects.length) % mainProjects.length,
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
