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
  const tab1 = [
    {
  title: "Mental Health Chatbot",
  description:
    "AI-powered chatbot that analyzes user symptoms and provides personalized mental health guidance using Python, Flask, and MongoDB.",
  imgUrl: projImg13, // replace with the correct image variable
  githubUrl: "https://github.com/Shreeti-Bajracharya/MedicalChat",
}
,

    {
      title: "Agent Website",
      description:
        "A modern digital agency website built with React JS and Tailwind CSS featuring sleek hover effects and smooth Framer Motion animations. The site includes a fully functional contact form that sends customer queries directly to the admin's email inbox.",
      imgUrl: projImg9,
      githubUrl: "https://github.com/Shreeti-Bajracharya/Agent-Website",
    },
    {
      title: "Modern Responsive",
      description:
        "Build and deploy a fully responsive website with modern UI/UX using React JS and Tailwind CSS. Learn to implement sleek parallax effects, bento box layouts, and mobile-first design principles while enhancing your React and Tailwind skills.",
      imgUrl: projImg10, // replace with the appropriate image variable
      githubUrl:
        "https://github.com/Shreeti-Bajracharya/BrainWaveFrontend",
    },
    {
  title: "Real Estate Website",
  description:
    "Build a fully responsive Real Estate website using React JS and Tailwind CSS, featuring smooth animations, modern UI/UX, and a functional contact form for property inquiries.",
  imgUrl: projImg14, // replace with the appropriate image variable
  githubUrl: "https://github.com/Shreeti-Bajracharya/RealEstateFrontend",
}
,
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
        "Built a responsive React News App with Bootstrap, API-driven articles, search, category filters, and pagination.",
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

  const tab2 = [
    {
      title: "Amazon Clone",
      description:
        "Built a responsive Amazon clone using HTML, CSS, and JavaScript with core pages like Home, Product, Cart, and Login. Focused on practicing front-end design, layout consistency, and interactive UI development.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/Shreeti-Bajracharya/amazon_clone",
    },
    {
      title: "Flower Shop E-commerce Website",
      description:
        "Designed a fully responsive online flower shop e-commerce website using pure HTML and CSS from scratch. The website features a modern layout with Flexbox for responsive design across all sections.",
      imgUrl: projImg11, // replace with the correct image variable
      githubUrl: "https://github.com/Shreeti-Bajracharya/ResponsivePurple",
    },
    {
      title: "Headphones Landing Page",
      description:
        "Created a fully responsive headphones landing page using HTML, CSS, and JavaScript. The project covers a complete modern layout including header, nav menu, home, product sections, discounts, sponsors, footer, and smooth scroll animations with ScrollReveal.",
      imgUrl: projImg12, // replace with the correct image variable
      githubUrl:
        "https://github.com/Shreeti-Bajracharya/ResponsiveLandingPage",
    },
  ];

  const tab3 = [
    {
      title: "To-Do List",
      description:
        "A simple task management app to add, delete, and mark tasks as completed. Built using JavaScript and React.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Shreeti-Bajracharya/todolist",
    },
    {
      title: "Calculator",
      description:
        "A basic web calculator that supports standard arithmetic operations using clean UI and JavaScript.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Shreeti-Bajracharya/Calculator",
    },
    {
      title: "Weather App",
      description:
        "Built a React JS Weather App fetching real-time data from OpenWeatherMap API, allowing users to search any location to view temperature, humidity, wind speed, and conditions.",
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
            <p>Things I’ve Built</p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {tab1.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {tab2.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {tab3.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="image" />
    </section>
  );
};
