import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particles";
import confession from "../../Assets/Projects/confession.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import chat from "../../Assets/Projects/chat.png"
import blog from "../../Assets/Projects/blog.png"
import sorting from "../../Assets/Projects/sorting.png"
import drum from "../../Assets/Projects/drum.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={confession}
              isBlog={false}
              title="MNIT Confession Website"
              description="A dynamic web application developed using EJS, Node.js, Express, MongoDB, Passport.js, and Google OAuth. This project provides a platform for students of the Malaviya National Institute of Technology (MNIT) to anonymously share their thoughts, opinions, and confessions."
              link="https://mnit-confession.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="The Portfolio Website is a personal website developed using React.js and several of its dependencies, including React Router, React Bootstrap, and React Icons. This project serves as a digital showcase of my skills, experience, and projects, allowing visitors to learn more about me and my work."
              link="https://rituraj-mnit.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Real Time Chat App"
              description="The Real-Time Chat App is a dynamic web application developed using HTML, CSS, Javascript, Node.js, Express.js, and Socket.io. This project provides users with a real-time communication platform, enabling instant messaging and collaboration among multiple users."
              link="https://github.com/rituraj2084/Chat-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Website"
              description="The Blog Website is a dynamic web application developed using EJS, CSS, Node.js, Express.js, and MongoDB. This project provides a platform for users to create, read, update, and delete blog posts, allowing them to share their thoughts, insights, and experiences with a wider audience."
              link="https://blog-web-ritu.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visualiser"
              description="The Sorting Visualizer is an interactive web application developed using HTML, CSS, and JavaScript. This project aims to visually demonstrate various sorting algorithms in action, allowing users to gain a better understanding of how different sorting methods work."
              link="https://rituraj2084.github.io/Sorting-Visualizer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drum}
              isBlog={false}
              title="Drum Kit"
              description="The Drum Kit is an interactive web application developed using HTML, CSS, JavaScript, and Bootstrap. This project brings the experience of playing a virtual drum set to the web, allowing users to create rhythmic beats and explore their musical creativity."
              link="https://rituraj2084.github.io/drum-kit/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
