import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particles";
import confession from "../../Assets/Projects/confession.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import chat from "../../Assets/Projects/chat.png";
import blog from "../../Assets/Projects/blog.png";
import sorting from "../../Assets/Projects/sorting.png";
import drum from "../../Assets/Projects/drum.png";
import calculator from "../../Assets/Projects/investment-calculator.jpg";
import conference from "../../Assets/Projects/tech-conference.png";

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
              imgPath={calculator}
              isBlog={false}
              title="Investment Calculator"
              description="I designed and implemented an Investment Calculator using React JS and custom CSS to provide users with a powerful tool for financial planning. This intuitive web application allows users to calculate potential returns on their investments by inputting key parameters such as initial investment amount, interest rate, and investment duration."
              link="https://investment-calculator-ritu.netlify.app/"
            />
          </Col>

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
              imgPath={conference}
              isBlog={false}
              title="Tech Conference"
              description="I crafted a dynamic and engaging Tech Conference Website using HTML, CSS, and JavaScript to showcase an immersive online experience for tech enthusiasts. This platform serves as a hub for conference details, featuring information on keynote speakers, agenda, and registration. The responsive design ensures seamless navigation across various devices, while JavaScript functionalities enhance user interaction. Through this project, I aimed to provide a visually appealing and informative space for tech enthusiasts to explore, engage, and participate in the upcoming conference."
              link="https://rituraj2084.github.io/Tech-Conference/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drum}
              isBlog={false}
              title="Drum Kit"
              description="Dive into the rhythm with my Drum Kit Website, a dynamic and interactive musical experience crafted using HTML, CSS, Bootstrap, and JavaScript. This web application allows users to play a virtual drum kit, producing various beats and sounds with just a click or a tap. The responsive design ensures accessibility across devices, while Bootstrap components enhance the visual appeal and user experience. Whether you're a music enthusiast or just looking for a fun way to explore web development, this Drum Kit Website combines creativity and technology for an engaging musical journey."
              link="https://rituraj2084.github.io/drum-kit/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
