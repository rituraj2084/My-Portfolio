import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCards";
import Particle from "../Particles";
import jnv from "../../Assets/jnv.png";
import mnit from "../../Assets/mnit.jpeg";
import rncollege from "../../Assets/rncollege.png"


function Educations() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education </strong>
        </h1>
    <br/>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EducationCard
              imgPath={mnit}
              height="225px"
            Examination="Graduation"
            UniversityOrBoard="NIT Jaipur (MNIT)"
            Institute="NIT Jaipur (MNIT)"
            PassingYear="2023"
            CGPA="7.17 CGPA"

            />
          </Col>
          <Col md={4} className="project-card">
            <EducationCard
              imgPath={rncollege}
            Examination="Intermediate/+2"
            UniversityOrBoard="BSEB"
            Institute="Ras Narayan College Pandaul"
            PassingYear="2018"
            CGPA="73.40 %"

            />
          </Col>

            <Col md={4} className="project-card">
              <EducationCard
                imgPath={jnv}
              Examination="Matriculation"
              UniversityOrBoard="CBSE"
              Institute="Jawahar Navodaya Vidyalaya Madhubani"
              PassingYear="2016"
              CGPA="10 CGPA"

              />
            </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Educations;
