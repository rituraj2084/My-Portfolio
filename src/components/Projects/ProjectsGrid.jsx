import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';

function ProjectsGrid({ projects }) {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      {projects.map((project, index) => (
        <Col md={4} className="project-card" key={index}>
          <ProjectCard
            imgPath={project.imgPath}
            isBlog={false}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProjectsGrid;
