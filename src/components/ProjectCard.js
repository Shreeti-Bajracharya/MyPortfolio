import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  const { isDark } = useContext(ThemeContext);

  const { title, description, imgUrl, githubUrl, liveUrl, stacks, category } =
    project;

  return (
    <div
      className={`modern-project-card ${
        isDark ? "project-card-dark" : "project-card-light"
      }`}
    >
      {/* Project Image Section with Desktop Mockup */}
      <div className="project-image-section">
        <div className="desktop-mockup">
          {/* Browser Chrome */}
          <div className="browser-chrome">
            <div className="browser-header">
              <div className="browser-buttons">
                <div className="button close"></div>
                <div className="button minimize"></div>
                <div className="button maximize"></div>
              </div>
              <div className="browser-address-bar">
                <span className="url-icon">🔒</span>
                <span className="url-text">https://project-demo.vercel.app</span>
              </div>
            </div>
            <div className="browser-content">
              <img src={imgUrl} alt={title} className="project-showcase-img" />
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div
          className={`category-badge ${isDark ? "badge-dark" : "badge-light"}`}
        >
          {category}
        </div>
      </div>

      {/* Project Info Section */}
      <div className="project-info-section">
        {/* Title */}
        <h3 className="project-card-title">{title}</h3>

        {/* Description */}
        <p className="project-card-description">{description}</p>

        {/* Tech Stack */}
        <div className="tech-stack">
          <h5 className="tech-stack-title">Tech Stack</h5>
          <div className="stack-badges">
            {stacks && stacks.length > 0 ? (
              stacks.map((stack, index) => (
                <span
                  key={index}
                  className={`stack-badge ${
                    isDark ? "badge-stack-dark" : "badge-stack-light"
                  }`}
                >
                  {stack}
                </span>
              ))
            ) : (
              <span className="no-stack">Tech stack not specified</span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="project-card-actions">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`action-btn live-btn ${
                isDark ? "btn-dark" : "btn-light"
              }`}
              title="View Live Demo"
            >
              <FaExternalLinkAlt size={14} />
              <span>View Live</span>
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`action-btn github-btn ${
                isDark ? "btn-dark" : "btn-light"
              }`}
              title="View Source Code"
            >
              <FaGithub size={14} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};