import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/HB1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FiletypeTsx, Mailbox, Mailbox2, Map, MapFill, Phone, PhoneFill, PinMapFill, Telephone, TelephoneForwardFill } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/hardikbhawsar13/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/hardikbhawsar"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/hardik_bhawsar13/"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
          <Col size={12} sm={6} className="">
            <p><Mailbox2/>  hardik.13bhawsar@gmail.com</p>
            <p><TelephoneForwardFill/> +1(657)799-8845</p>
            <p><PinMapFill/> Los Angeles, CA</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}