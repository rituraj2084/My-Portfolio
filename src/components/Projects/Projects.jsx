import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particles';
import ProjectsGrid from './ProjectsGrid';
import projectsData from '../../data/projectsData';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on.
        </p>

        <ProjectsGrid projects={projectsData} />
      </Container>
    </Container>
  );
}

export default Projects;
