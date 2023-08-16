import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { BiSolidPhone, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./style.scss";

function Contact() {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row className="contact_container">
        <Col xs={12}>
          <motion.button
            className="px-4 d-block mx-auto primary_btn shadow-lg rounded"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact me
            <HiOutlineArrowNarrowRight className="ms-2" />
          </motion.button>
        </Col>
        <Col xs={12} className="my-3 or">
          <p>OR</p>
        </Col>
        <Col xs={12} className="contact_content">
          <p>
            <BiSolidPhone />
            <a href="tel:7008865007">+91 7008865007</a>
          </p>
          <p>
            <BiLogoGmail />
            <a href="mailto:mr.somyars@gmail.com">mr.somyars@gmail.com</a>
          </p>
          <p>
            <BiLogoLinkedin />
            <a href="https://www.linkedin.com/in/somya-ranjan" target="blank">
              Somyaranjan Sethy
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
