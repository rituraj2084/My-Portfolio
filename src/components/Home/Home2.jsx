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
            <p className="purple" style={{ fontSize: '1.2em' }}>
              Frontend Engineer | Building scalable, high-performance web
              experiences
            </p>
            <p className="home-about-body">
              I am Ritu Raj, a Frontend Engineer passionate about building fast,
              scalable, and user-centric web applications. I specialize in
              creating clean and intuitive interfaces using
              <b className="purple">
                {' '}
                JavaScript (ES6+), React, Redux, Next.js, TypeScript, SASS, and
                SCSS
              </b>
              , with a strong focus on performance, accessibility, and
              maintainable code.
              <br />
              <br />I currently work at <b className="purple">
                Bain & Company
              </b>{' '}
              as a Senior Frontend Engineer, where I contribute to high-impact,
              production-grade applications. My work involves collaborating
              closely with designers, backend engineers, and product
              stakeholders to deliver scalable, performance-optimized solutions
              while following industry best practices.
              <br />
              <br />
              Previously, I worked at{' '}
              <b className="purple">Deloitte (Offices of US)</b>, where I gained
              hands-on experience building enterprise-level applications,
              strengthening my foundations in frontend architecture, performance
              optimization, and accessibility-driven development.
              <br />
              <br />
              Beyond my professional work, I enjoy exploring new technologies,
              refining my skills, and building side projects that challenge my
              thinking. I am always open to meaningful conversations and
              opportunities to create impactful digital experiences together.
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
              discussing how we can work together to bring your ideas to life!
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
                  href="https://www.x.com/CoderRajj"
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
