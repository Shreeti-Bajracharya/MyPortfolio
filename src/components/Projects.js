import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import projImg4 from "../assets/img/projImg4.png";
import projImg5 from "../assets/img/projImg5.png";
import projImg6 from "../assets/img/projImg6.png";
import projImg7 from "../assets/img/projImg7.png";
import projImg8 from "../assets/img/projImg8.png";
import projImg9 from "../assets/img/projImg9.png";
import projImg10 from "../assets/img/projImg10.png";
import projImg11 from "../assets/img/projImg11.png";
import projImg12 from "../assets/img/projImg12.png";
import projImg18 from "../assets/img/projImg18.png";
import projImg14 from "../assets/img/projImg14.png";
import projImg19 from "../assets/img/projImg19.png";
import projImg16 from "../assets/img/projImg16.png";
import projImg17 from "../assets/img/projImg17.png";
import projImg20 from "../assets/img/projImg20.png";

export const Projects = () => {

  const realTimeProjects = [
    {
      title: "Insurance Company System",
      description:
        "Full-stack insurance platform using React, Tailwind, Node.js with bilingual (English–Nepali) support, Admin CRM, claims, policies, branch management and real-time updates.",
      imgUrl: projImg19,
      githubUrl: "",
    },
    {
      title: "BBTM Foundation Website",
      description:
        "Responsive non-profit website showcasing healthcare, emergency response, and social programs using React and Tailwind CSS.",
      imgUrl: projImg16,
      githubUrl: "",
    },
    {
      title: "Clothing E-commerce System",
      description:
        "MERN stack e-commerce platform with product filtering, order management and admin dashboard.",
      imgUrl: projImg17,
      githubUrl: "",
    },
    {
      title: "Liquor Store Ecommerce",
      description:
        "Full liquor e-commerce platform built in React + Tailwind with cart, category browsing, search, and upcoming API integrations.",
      imgUrl: projImg20,
      githubUrl: "",
    },
  ];

  const majorProjects = [
    {
      title: "Mental Health Assistant & Consultation System",
      description:
        "AI-powered MERN appointment and chatbot system using Gemini, Sentence Transformer, and FAISS indexing.",
      imgUrl: projImg18,
      githubUrl: "https://github.com/Shreeti-Bajracharya/MedicalChat",
    },
    {
      title: "Agent Website",
      description:
        "Full animated digital agency website using React, Tailwind and Framer Motion.",
      imgUrl: projImg9,
      githubUrl: "https://github.com/Shreeti-Bajracharya/Agent-Website",
    },
    {
      title: "Modern UI Website",
      description:
        "Modern UI website featuring parallax sections, animations, and responsive layouts.",
      imgUrl: projImg10,
      githubUrl: "https://github.com/Shreeti-Bajracharya/BrainWaveFrontend",
    },
    {
      title: "Real Estate Website",
      description:
        "Real estate website with modern animations, responsive UI and enquiry form.",
      imgUrl: projImg14,
      githubUrl: "https://github.com/Shreeti-Bajracharya/RealEstateFrontend",
    },
  ];

  const frontendProjects = [
    {
      title: "Amazon Clone",
      description: "Responsive clone built using HTML, CSS, and JS.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/Shreeti-Bajracharya/amazon_clone",
    },
    {
      title: "Flower Shop Website",
      description: "Pure HTML + CSS e-commerce layout using Flexbox.",
      imgUrl: projImg11,
      githubUrl: "https://github.com/Shreeti-Bajracharya/ResponsivePurple",
    },
    {
      title: "Landing Page UI",
      description: "Responsive landing page with animations & modern design.",
      imgUrl: projImg12,
      githubUrl:
        "https://github.com/Shreeti-Bajracharya/ResponsiveLandingPage",
    },
  ];

  const miniProjects = [
    {
      title: "To-Do List",
      description: "Task management app using React & JavaScript.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Shreeti-Bajracharya/todolist",
    },
    {
      title: "Calculator",
      description: "Web calculator using HTML, CSS & JavaScript.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Shreeti-Bajracharya/Calculator",
    },
    {
      title: "Weather App",
      description: "API-based weather app using React JS.",
      imgUrl: projImg8,
      githubUrl: "https://github.com/Shreeti-Bajracharya/WeatherApp",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="section-heading">Projects</h2>
            <p className="section-subtitle">
              A curated collection of the work I've designed, developed, and contributed to.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills justify-content-center align-items-center modern-tabs"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Real-Time / Internship</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Major Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Frontend Practice</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Mini Projects</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="fade-up">
                <Tab.Pane eventKey="first">
                  <Row>
                    {realTimeProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {majorProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    {frontendProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <Row>
                    {miniProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
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
