import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import universityLogo1 from '../assets/img/sinhgad.png';
import universityLogo2 from '../assets/img/California_State_University,_Fullerton_seal.png';

const Education = () => {
  return (
    <section className="experience" id="education">
      <Container>
        <h2 className="experience-heading">Education</h2>
        <Row>
          <Col md={6}>
            <div className="experience-item">
              <img className="experience-logo" src={universityLogo1} alt="Company Logo" />
              <h3 className="experience-title">Savitribai Phule Pune University, Pune</h3>
              <p className="experience-company">Bachelor of Engineering, Computer Engineering</p>
              <p className="education-details">(University of Pune)</p>
              <p className="experience-dates">August 2017 - May 2021</p>
              <p className="education-details">CGPA: 9.12/10</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="experience-item">
              <img className="experience-logo" src={universityLogo2} alt="Company Logo" />
              <h3 className="experience-title">California State University, Fullerton</h3>
              <p className="experience-company">Master of Science,Computer Science</p>
              <p className="experience-dates">August 2022 - May 2024</p>
              <p className="education-details">GPA: 3.71/4</p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
