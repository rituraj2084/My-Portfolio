import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="mb-2">{props.title}</Card.Title>
        <Card.Subtitle className="mb-1">
          Technologies:{' '}
          <span className="purple">{props?.technologies?.join(', ')}</span>
        </Card.Subtitle>
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? 'View Blog' : 'View Project'}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
