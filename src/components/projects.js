import React, { useState } from 'react';
import '../styles/projects.css';

const projects = [
  { title: 'Portfolio Project - 2024', description: '개인 포트폴리오 프로젝트', link: 'https://github.com/rlaalswns128/rlaalswns128.github.io/tree/master' },
  { title: 'Capstone Design Project - 2024', description: 'Capstone Design Project - 2024', link: 'https://github.com/rlaalswns128/Uni/tree/b92462210954f7d27d92765651a23038c7f4ed8d/Projects/HealthCare' },
  { title: 'Software Project - 2024', description: 'Software Project - 2024', link: 'https://github.com/rlaalswns128/Uni/tree/de241c6366ea8b8eba8f4702f00790329f3ce6b5/Projects/WhiskyPedia' },
  { title: 'Software Project - 2023', description: 'Software Project - 2023', link: 'https://github.com/rlaalswns128/Uni/tree/de241c6366ea8b8eba8f4702f00790329f3ce6b5/Projects/QUESTorm' },
  { title: '스프링 프로젝트 - 2023', description: 'School Forum', link: 'https://github.com/rlaalswns128/Uni/tree/811d813276e076f1a863a52191e11ba44813a6d4/Projects/School%20Forum' },
  { title: 'JSP 프로젝트 - 2022', description: 'Red Devils', link: 'https://github.com/rlaalswns128/Uni/tree/7e0c72a3effbbb417b27a09aaae7b3a90e260c08/Projects/RedDevils' },
  { title: '인하공전 3학년 교과과정 정리 - 2024', description: '인하공전 3학년 교과과정 정리', link: 'https://https://rlaalswns128.github.io/' },
  { title: '인하공전 2학년 교과과정 정리 - 2022', description: '인하공전 2학년 교과과정 정리', link: 'https://https://rlaalswns128.github.io/' },
  { title: '인하공전 1학년 교과과정 정리 - 2022', description: '인하공전 1학년 교과과정 정리', link: 'https://https://rlaalswns128.github.io/' },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-section">
      <div className="project-list">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => handleProjectClick(project)}
            className="project-button"
          >
            {project.title}
          </button>
        ))}
      </div>
      <div className="project-content">
        <h3>{selectedProject.title}</h3>
        <div className="project-description">
          <p style={{ whiteSpace: 'pre-wrap' }}>
            {selectedProject.description}
          </p>
          {selectedProject.link && (
            <a 
              href={selectedProject.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              프로젝트 보기 →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;