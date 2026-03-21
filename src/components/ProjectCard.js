import { Col } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  liveUrl,
}) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <Col sm={6} md={4} className="mb-4">
      <div
        className={`project-card ${isDark ? "project-card-dark" : "project-card-light"}`}
        onClick={() => liveUrl && window.open(liveUrl, "_blank")}
        style={{ cursor: liveUrl ? "pointer" : "default" }}
      >
        <img src={imgUrl} alt={title} className="project-img" />

        <div className={`project-overlay ${isDark ? "overlay-dark" : "overlay-light"}`}>
          <h4>{title}</h4>
          <p>{description}</p>

          <div className="project-actions">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`live-btn ${isDark ? "live-btn-dark" : "live-btn-light"}`}
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
                className={`github-btn ${isDark ? "github-btn-dark" : "github-btn-light"}`}
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