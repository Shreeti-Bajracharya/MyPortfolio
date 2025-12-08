import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="project-card">
        <img src={imgUrl} alt={title} className="project-img" />

        <div className="project-overlay">
          <h4>{title}</h4>
          <p>{description}</p>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
