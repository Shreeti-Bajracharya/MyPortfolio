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
import projImg13 from "../assets/img/projImg13.png";
import projImg14 from "../assets/img/projImg14.png";
import projImg15 from "../assets/img/projImg15.png";
import projImg16 from "../assets/img/projImg16.png";

// export const Projects=()=>{
//     const projects=[

//         {
//     title: "Recipe Website",
//     description: "A responsive food recipe app with search and filter features using React, HTML, CSS, and JavaScript.",
//     imgUrl: projImg1,
//     githubUrl:"https://github.com/Shreeti-Bajracharya/RecipeWeb",
// },

// {
//     title: "To-Do List",
//     description: "A simple task management app to add, delete, and mark tasks as completed. Built using JavaScript and React.",
//     imgUrl: projImg2,
//     githubUrl:"https://github.com/Shreeti-Bajracharya/todolist",
// },

// {
//     title: "Calculator",
//     description: "A basic web calculator that supports standard arithmetic operations using clean UI and JavaScript.",
//     imgUrl: projImg3,
//     githubUrl:"https://github.com/Shreeti-Bajracharya/Calculator",
// },
// {
//     title: "Medbot",
//     description: "MedBot is an AI-powered medical chatbot that reads PDFs, understands user queries, and provides accurate, human-like answers. It uses vector search with FAISS and Gemini AI for intelligent, context-based responses.",
//     imgUrl: projImg4,
//     githubUrl:"https://github.com/Shreeti-Bajracharya/medbot",
// },
// {
//     title: "Amazon Clone",
//     description: "Built a responsive Amazon clone using HTML, CSS, and JavaScript with core pages like Home, Product, Cart, and Login. Focused on practicing front-end design, layout consistency, and interactive UI development.",
//     imgUrl: projImg5,
//     githubUrl:"https://github.com/Shreeti-Bajracharya/amazon_clone",
// },
// {
//     title: "Movie Application",
//     description: "Built a React Movie App with API integration, hooks, and routing for dynamic and responsive UI.",
//     imgUrl: projImg6,
//     githubUrl:"https://github.com/Shreeti-Bajracharya/MovieApplication",
// },
// {
//     title: "News Application",
//     description: "Built a responsive React News App with Bootstrap, API-driven articles, search, category filters, and pagination.",
//     imgUrl: projImg7,
//     githubUrl:"https://github.com/Shreeti-Bajracharya/NewsMagazine",
// },

//     ];
//     return(
//         <section className="project" id="projects">
//             <Container>
//                 <Row>
//                     <Col>
//                     <h2>My Projects</h2>
//                     <p> Things I’ve Built</p>

//                     <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content>
//                     <Tab.Pane eventKey="first">
//                         <Row>
//                             {
//                                 projects.map((project, index)=>{
//                                     return(
//                                         <ProjectCard key={index} {...project}/>
//                                     )
//                                 })
//                             }
//                         </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="second"><p>Explore my <a href="https://github.com/Shreeti-Bajracharya" target="_blank" rel="noopener noreferrer">GitHub projects</a> to see my work and growth in tech!</p>
// </Tab.Pane>
//                     <Tab.Pane eventKey="third"></Tab.Pane>
//                   </Tab.Content>
//                   </Tab.Container>
//                     </Col>
//                 </Row>
//             </Container>
//             <img className="background-image-right" src={colorSharp2} alt="image"></img>
//         </section>
//     )
// }

export const Projects = () => {
  // 🟢 Tab 1: Real-Time / Internship Projects
  const realTimeProjects = [
    {
      title: "Star Micro Insurance",
      description:
        "Developed a full-stack insurance website using React JS, Tailwind CSS, and Node.js. The platform features English–Nepali language support, an admin login panel for real-time content management, and modules for product browsing, premium calculation, claim submission, and branch contact.",
      imgUrl: projImg15,
      githubUrl: "https://github.com/Shreeti-Bajracharya/StarMicroInsurance",
    },
    {
      title: "BBTM Foundation",
      description:
        "Developed a responsive non-profit website using React JS and Tailwind CSS to showcase the foundation’s community initiatives across Nepal, including emergency response, healthcare, and community development programs.",
      imgUrl: projImg16,
      githubUrl: "",
    },
  ];

  // 🟣 Tab 2: Major Academic / Personal Projects
  const majorProjects = [
    {
      title: "Mental Health Chatbot",
      description:
        "AI-powered chatbot that analyzes user symptoms and provides personalized mental health guidance using Python, Flask, and MongoDB.",
      imgUrl: projImg13,
      githubUrl: "https://github.com/Shreeti-Bajracharya/MedicalChat",
    },
    {
      title: "Agent Website",
      description:
        "A modern digital agency website built with React JS and Tailwind CSS featuring sleek hover effects and smooth Framer Motion animations, with a functional contact form for direct client communication.",
      imgUrl: projImg9,
      githubUrl: "https://github.com/Shreeti-Bajracharya/Agent-Website",
    },
    {
      title: "Modern Responsive",
      description:
        "Built a fully responsive modern UI/UX website using React JS and Tailwind CSS with parallax effects, bento layouts, and mobile-first design.",
      imgUrl: projImg10,
      githubUrl: "https://github.com/Shreeti-Bajracharya/BrainWaveFrontend",
    },
    {
      title: "Real Estate Website",
      description:
        "Built a fully responsive Real Estate website using React JS and Tailwind CSS, featuring smooth animations, modern UI/UX, and a functional contact form for property inquiries.",
      imgUrl: projImg14,
      githubUrl: "https://github.com/Shreeti-Bajracharya/RealEstateFrontend",
    },
    {
      title: "Movie Application",
      description:
        "Built a React Movie App with API integration, hooks, and routing for dynamic and responsive UI.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/Shreeti-Bajracharya/MovieApplication",
    },
    {
      title: "News Application",
      description:
        "Developed a responsive React News App with Bootstrap, API-driven articles, search, category filters, and pagination.",
      imgUrl: projImg7,
      githubUrl: "https://github.com/Shreeti-Bajracharya/NewsMagazine",
    },
    {
      title: "Recipe Website",
      description:
        "A responsive food recipe app with search and filter features using React, HTML, CSS, and JavaScript.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Shreeti-Bajracharya/RecipeWeb",
    },
  ];

  // 🟡 Tab 3: Frontend Practice Projects
  const frontendProjects = [
    {
      title: "Amazon Clone",
      description:
        "Built a responsive Amazon clone using HTML, CSS, and JavaScript with pages like Home, Product, Cart, and Login to practice layout and UI interactions.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/Shreeti-Bajracharya/amazon_clone",
    },
    {
      title: "Flower Shop E-commerce Website",
      description:
        "Designed a fully responsive flower shop e-commerce website using pure HTML and CSS with modern Flexbox layout.",
      imgUrl: projImg11,
      githubUrl: "https://github.com/Shreeti-Bajracharya/ResponsivePurple",
    },
    {
      title: "Headphones Landing Page",
      description:
        "Created a fully responsive landing page using HTML, CSS, and JavaScript, featuring scroll animations and modern product layout.",
      imgUrl: projImg12,
      githubUrl: "https://github.com/Shreeti-Bajracharya/ResponsiveLandingPage",
    },
  ];

  // 🔵 Tab 4: Mini / Beginner Projects
  const miniProjects = [
    {
      title: "To-Do List",
      description:
        "A simple task management app to add, delete, and mark tasks as completed using JavaScript and React.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Shreeti-Bajracharya/todolist",
    },
    {
      title: "Calculator",
      description:
        "A basic web calculator that supports standard arithmetic operations with clean UI using JavaScript.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Shreeti-Bajracharya/Calculator",
    },
    {
      title: "Weather App",
      description:
        "Built a React JS Weather App fetching real-time data from OpenWeatherMap API to display weather details by city.",
      imgUrl: projImg8,
      githubUrl: "https://github.com/Shreeti-Bajracharya/WeatherApp",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>My Projects</h2>
            <p>Things I’ve Built and Worked On</p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
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

              <Tab.Content>
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

      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

