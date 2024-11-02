import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Ritu Raj, a passionate Frontend Developer dedicated to
              crafting seamless and engaging digital experiences. With expertise
              in
              <b className="purple">
                {' '}
                JavaScript (ES6+), React, Redux, TypeScript, SASS, SCSS
              </b>
              , and a keen eye for user-centric design, I specialize in building
              intuitive web applications that balance aesthetic appeal and
              robust functionality.
              <br />
              <br />
              My journey as a developer began with a fascination for solving
              complex problems and transforming ideas into code. Since then,
              I’ve had the pleasure of working on dynamic projects that range
              from data-driven visualizations to immersive web apps.
              <br />
              <br />
              Currently, I’m working at{' '}
              <b className="purple"> Deloitte (Offices of US)</b>, where I
              collaborate on high-impact projects, focusing on performance,
              scalability, and accessibility. Every project is a new challenge,
              and I approach each with an aim to push my creative boundaries and
              adopt industry-best practices. My goal is simple yet ambitious: to
              leverage technology in building meaningful solutions that leave a
              lasting impact.
              <br />
              <br />
              Outside of work, I’m constantly refining my skills and exploring
              new technologies. I look forward to connecting and discussing how
              we can bring fresh ideas to life together!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p style={{ fontSize: '1.5em' }} className="purple">
              Thank you for visiting my portfolio website, and I look forward to
              discuss how we can work together to bring your ideas to life!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rituraj2084"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/rituraj2084"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rituraj2084/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
