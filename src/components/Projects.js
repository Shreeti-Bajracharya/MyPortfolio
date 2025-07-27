import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";

export const Projects=()=>{
    const projects=[
        {
    title: "Recipe Website",
    description: "A responsive food recipe app with search and filter features using React, HTML, CSS, and JavaScript.",
    imgUrl: projImg1,
},
{
    title: "To-Do List",
    description: "A simple task management app to add, delete, and mark tasks as completed. Built using JavaScript and React.",
    imgUrl: projImg2,
},

{
    title: "Calculator",
    description: "A basic web calculator that supports standard arithmetic operations using clean UI and JavaScript.",
    imgUrl: projImg3,
},

        
    ];
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>My Projects</h2>
                    <p> Things I’ve Built</p>
                    
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                            {
                                projects.map((project, index)=>{
                                    return(
                                        <ProjectCard key={index} {...project}/> 
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h3>Check Out My Learning Resources</h3>
  <p>Visit my <a href="https://github.com/Shreeti-Bajracharya" target="_blank" rel="noopener noreferrer">GitHub</a> to see what I’m learning!</p>
</Tab.Pane>
                    <Tab.Pane eventKey="third"><h3>Upcoming Projects</h3> <p>I'm currently working on exciting projects in React and Machine Learning. Stay tuned for updates!</p></Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="image"></img>
        </section>
    )
}