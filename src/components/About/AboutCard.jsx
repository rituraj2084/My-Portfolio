import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            I’m <span className="purple"> Ritu Raj </span>, a Frontend Developer
            with a strong foundation in modern web technologies like{' '}
            <span className="purple">
              {' '}
              JavaScript (ES6+), React, Redux, TypeScript, Tailwind CSS, SCSS
              and SASS.
            </span>{' '}
            I graduated from <span className="purple">MNIT Jaipur </span> with a
            degree in engineering and currently work as a Frontend Developer at
            <span className="purple"> Deloitte USI, </span> where I focus on
            delivering high-quality, scalable solutions for clients.
            <br />
            <br />
            With over a year of hands-on experience, I’ve contributed to diverse
            projects, ranging from interactive data visualizations to
            comprehensive web applications. My recent work includes building{' '}
            <span className="purple">
              a Netflix-inspired site using Vite, React, and Firebase
              Authentication, as well as creating a Swiggy-style app that
              leverages live API integrations to provide real-time
              functionality.
            </span>{' '}
            Additionally, my ongoing projects in the finance and sports
            industries have sharpened my skills in{' '}
            <span className="purple">
              accessibility, unit testing, and agile development.
            </span>{' '}
            <br />
            <br />
            I’m driven by a goal to secure an SDE role in a leading
            product-based company. Alongside this, I continually strive to
            expand my technical expertise, adopt industry best practices, and
            approach each task with a problem-solving mindset. When I’m not
            coding, I explore the latest frontend developments, refine my
            understanding of algorithms, and connect with like-minded
            professionals to stay inspired.
          </p>

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
