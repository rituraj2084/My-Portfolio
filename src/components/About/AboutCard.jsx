import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Ritu Raj </span>
            from <span className="purple"> Madhubani, Bihar, India.</span>
            <br />I have completed B.Tech from MNIT Jaipur in 2023. I'm a
            passionate and dedicated software developer with expertise in the{' '}
            <b className="purple">
              MERN (MongoDB, Express.js, React.js, and Node.js) stack, C++,
              Python, Data Analysis &amp; Data Structures and Algorithms (DSA).
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Stock Trading
            </li>

            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>

            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
          </ul>

          <br />
          <p style={{ color: 'rgb(155 126 172)' }}>
            "Hard work beats talent, when talent doesn't work hard!"{' '}
          </p>
          <footer className="blockquote-footer">Tim Notke</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
