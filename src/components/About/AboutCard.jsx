import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            I am <span className="purple">Ritu Raj</span>, a Frontend Engineer
            with a strong foundation in modern web technologies such as{' '}
            <span className="purple">
              JavaScript (ES6+), React, Redux, Next.js, TypeScript, Tailwind
              CSS, SCSS, and SASS
            </span>
            . I graduated from <span className="purple">MNIT Jaipur</span> with
            a degree in engineering and am currently working as a Senior
            Frontend Engineer (Associate) at{' '}
            <span className="purple">Bain & Company</span>, where I focus on
            building scalable, high-performance, and user-centric web
            applications.
            <br />
            <br />
            Previously, I worked at{' '}
            <span className="purple">Deloitte (USI)</span>, where I gained
            experience developing enterprise-grade solutions across domains such
            as Finance and Pharma. These projects strengthened my understanding
            of{' '}
            <span className="purple">
              accessibility, unit testing, performance optimization, and agile
              development practices
            </span>
            .
            <br />
            <br />
            With over{' '}
            <span className="purple">2.5 years of professional experience</span>
            , I have contributed to a wide range of projects—from interactive
            dashboards and data-driven visualizations to full-scale web
            platforms. My work includes building a{' '}
            <span className="purple">
              Netflix-inspired streaming application using React and Firebase
              Authentication
            </span>{' '}
            and a Swiggy-style food ordering app leveraging live API
            integrations for real-time functionality.
            <br />
            <br />I am driven by continuous learning and a passion for building
            products that create real-world impact. Outside of work, I enjoy
            exploring emerging frontend technologies, improving my
            problem-solving skills, and connecting with like-minded engineers to
            stay inspired.
          </p>

          <br />

          <p style={{ color: 'rgb(155 126 172)' }}>
            “Hard work beats talent, when talent doesn’t work hard.”
          </p>
          <footer className="blockquote-footer">Tim Notke</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
