import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import companyLogo1 from '../assets/img/Persistent_Logo_Vertical_Orange_Silver.png';
import companyLogo2 from '../assets/img/IIT_white.png'
export const Experience = () => {
  return (
    <section className="experience">
      <Container>
        <h2 className="experience-heading">Experience</h2>
        <Row>
          <Col md={6}>
            <div className="experience-item">
              <img className="experience-logo" src={companyLogo1} alt="Company Logo" />
              <h3 className="experience-title">Software Engineer</h3>
              <p className="experience-company">Persistent Systems, Pune</p>
              <p className="experience-dates">May 2021 - August 2022</p>
              <ul className="experience-details">
                <li className="experience-detail">Developed a scalable bioinformatics web app portal on AWS, leveraging Nextflow Tower APIs in Java and Spring Boot;
facilitated launch, management, testing and monitoring of genomics data pipelines, driving research efficiency by 40%.</li>
                <li className="experience-detail">Designed and developed the frontend of a web app portal using TypeScript, Angular, HTML, and CSS; improved user
experience, resulting in a 15% decrease in bounce rate.Utilized responsive design principles to ensure seamless functionality.</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="experience-item">
              <img className="experience-logo" src={companyLogo2} alt="Company Logo" />
              <h3 className="experience-title">Summer Intern</h3>
              <p className="experience-company">Indian Institute of Technology, Mandi</p>
              <p className="experience-dates">June 2019 - July 2019</p>
              <ul className="experience-details">
                <li className="experience-detail">Implemented a highly accurate image-based digit classification system using machine learning and libraries (NumPy,
Pandas, Scikit-learn, TensorFlow) in Python, achieving 98% accuracy on datasets of digits 0 to 9.</li>
                <li className="experience-detail">Streamlined the digit classification pipeline by integrating parallel processing and GPU acceleration, reducing
inference time by 40% and enabling real-time digit recognition in a production environment.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
