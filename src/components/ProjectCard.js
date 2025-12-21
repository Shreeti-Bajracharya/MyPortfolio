import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  liveUrl,
}) => {
  return (
    <Col sm={6} md={4}>
      <div
        className="project-card"
        onClick={() => liveUrl && window.open(liveUrl, "_blank")}
        style={{ cursor: liveUrl ? "pointer" : "default" }}
      >
        <img src={imgUrl} alt={title} className="project-img" />

        <div className="project-overlay">
          <h4>{title}</h4>
          <p>{description}</p>

          <div className="project-actions">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
