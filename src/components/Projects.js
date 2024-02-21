import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/doctor.png";
import projImg2 from "../assets/img/twitter1.png";
import projImg3 from "../assets/img/movie.png";
import projImg4 from "../assets/img/alignment.png";
import projImg5 from "../assets/img/flask.png";
import projImg6 from "../assets/img/traffic.png";
import projImg7 from "../assets/img/digit.png";
import projImg8 from "../assets/img/globalAlignment.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects1 = [
    {
      title: "Doctor Appointment Booking System",
      description: "A appointment booking system developed using Spring Boot, Java, JavaScript and HTML.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/hardikbhawsar/Doctor-Appointment-Booking-System",
    },
    {
      title: "Flask RESTful API",
      description: "A RESTful API is built using Flask and Python.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/hardikbhawsar/Flask-RESTful-API",
    },
    {
      title: "Smart Traffic Control System",
      description: "A traffic control system implemented on live video input using Neural Netword and YOLOv5 algorithm.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/hardikbhawsar/Smart-Traffic-Control-System",
    },
  ];
  const projects2 = [
    {
      title: "Digit Recognizer",
      description: "A mouse drawn live digit recognizer implemented using Python, Convolutional Neural Network and  OpenCV.",
      imgUrl: projImg7,
      githubUrl: "https://github.com/hardikbhawsar/Digit-Recognizer",
    },
    {
      title: " Twitter Sentiment Analysis",
      description: "Live sentiment data analysis on twitter data using pyspark and tweepy.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/hardikbhawsar/CPSC-531-Sentiment-Analysis-on-twitter-data-using-pyspark-and-tweepy",
    },
    {
      title: "Movie Recommendation System",
      description: "A movie recommendation system using Prolog and Python.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/hardikbhawsar/Movie-Recommendation-System",
    },

  ];
  const projects3 = [
    {
      title: "Global Alignment Algorithm",
      description: "A survey paper on bioinformatics algorithm named as Global Alignment.",
      imgUrl: projImg8,
      githubUrl: "https://github.com/hardikbhawsar/Global-Alignment",
    },
    {
      title: "Edit Distance Algorithm in Python",
      description: "A bioinformatics algorithm named as Edit distance implemented in Python",
      imgUrl: projImg4,
      githubUrl: "https://github.com/hardikbhawsar/Edit-Distance-Python",
    },
    {
      title: "Edit Distance Algorithm in C++",
      description: "A bioinformatics algorithm named as Edit distance implemented in C++",
      imgUrl: projImg4,
      githubUrl: "https://github.com/hardikbhawsar/Edit-Distance-CPP",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <p>Explore a collection of projects showcasing proficiency in Java, Spring Boot, SQL, Flask, Python, HTML, CSS, and JavaScript. From dynamic web applications to database management systems, these projects demonstrate a holistic understanding of full-stack development.</p>
                    <Row>
                      {projects1.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Delve into innovative projects leveraging PySpark, Prolog, machine learning algorithms, neural networks, and convolutional neural networks. These projects illustrate the application of advanced techniques in data analysis, classification, and prediction, including real-time data processing using tools like Tweepy for live streaming data.</p>
                    <Row>
                      {
                        projects2.map((project, index) => {
                          return (
                            <ProjectCard key={index} {...project} />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Discover projects focused on bioinformatics algorithms implemented in Python and C++. From edit distance calculations to global alignment algorithms, these projects showcase the utilization of computational techniques to analyze biological data, offering insights into sequence analysis and molecular biology research.</p>
                    <Row>
                      {
                        projects3.map((project, index) => {
                          return (
                            <ProjectCard key={index} {...project} />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
