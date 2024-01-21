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
              description="I designed and implemented an Investment Calculator using React JS and custom CSS to provide users with a powerful tool for financial planning. This intuitive web application allows users to calculate potential returns on their investments by inputting key parameters such as initial investment amount, interest rate, and investment duration. The real-time calculations and interactive user interface enhance the overall user experience, making it easy for individuals to make informed decisions about their financial goals. Through this project, I aimed to combine functionality with a clean and visually appealing design, showcasing my proficiency in front-end development using React JS and CSS."
              link="https://investment-calculator-ritu.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={confession}
              isBlog={false}
              title="MNIT Confession Website"
              description="Step into the anonymous realm of expressions with the MNIT Confession Website—a unique platform developed using EJS, Node.js, Express, MongoDB, Passport.js, and Google OAuth. This web application provides users with a confidential space to share their thoughts, confessions, and anecdotes. Leveraging the power of Google OAuth for secure authentication and Passport.js for seamless authorization, users can confess and interact without revealing their identities. The integration with MongoDB ensures efficient storage and retrieval of confessions. Explore the intersection of technology and human expression with this dynamic and secure confession platform."
              link="https://mnit-confession.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Explore my professional journey and accomplishments through my Portfolio Website, meticulously crafted with React.js and Bootstrap. This dynamic and responsive website serves as a showcase of my skills, projects, and experiences. The use of React.js ensures a seamless and interactive user experience, while Bootstrap contributes to a modern and visually appealing design. Dive into the various sections to learn more about my skills, view my projects, and connect with me. Discover the intersection of creativity and technology in this personalized space that reflects my passion for web development."
              link="https://rituraj-mnit.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Real Time Chat App"
              description="Experience the excitement of instant communication with my Real-Time Chat Application. This dynamic and responsive web application is developed using HTML, CSS, JavaScript, Node.js, Express.js, and Socket.io. Users can seamlessly connect in real-time, exchanging messages and participating in live conversations. The application leverages Socket.io for real-time bidirectional event-based communication, creating a dynamic and engaging platform for online interaction. Dive into the world of real-time communication technology and explore the possibilities with this innovative chat application."
              link="https://github.com/rituraj2084/Chat-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Website"
              description="Embark on a journey of ideas and insights with my Blog Website, a dynamic platform crafted with EJS, CSS, Node.js, Express.js, and MongoDB. This full-stack web application empowers users to create, read, update, and delete blog posts seamlessly. The use of EJS templating engine ensures a dynamic and efficient front-end, while Node.js and Express.js handle the back-end functionalities. The integration with MongoDB enables the storage and retrieval of blog data. Immerse yourself in a user-friendly blogging experience that combines creativity, functionality, and the power of a robust tech stack."
              link="https://blog-web-ritu.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visualiser"
              description="Embark on a visual journey of algorithms with my Sorting Visualizer, a web application crafted using HTML, CSS, and JavaScript. This interactive website allows users to witness the magic of various sorting algorithms in action, providing a dynamic and educational experience. Users can choose from popular sorting algorithms such as Bubble Sort, Merge Sort, and Quick Sort, and observe the real-time visualization of how these algorithms rearrange elements to achieve an ordered sequence. Dive into the world of algorithms and data visualization with this engaging Sorting Visualizer."
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
