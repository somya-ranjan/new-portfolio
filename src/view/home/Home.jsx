import React from "react";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

// // static import
import TransitionLayouts from "../../layouts/transition/TransitionLayouts";
import { MAIN_BG_IMG } from "../../assets/img";
import "./style.scss";

function Home() {
  return (
    <TransitionLayouts>
      <Row className="align-items-sm-center justify-content-between home_main_container">
        <Col xs={12} sm={8} md={6} lg={5}>
          <Container>
            <Row>
              <Col
                xs={1}
                className="d-flex flex-column justify-content-between align-items-center link_container"
              >
                <motion.a
                  href="https://github.com/somya-ranjan"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="shadow-lg"
                  target="blank"
                >
                  <FaGithub className="fs-3" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/somya-ranjan"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="shadow-lg"
                  target="blank"
                >
                  <FaLinkedinIn className="fs-3" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="shadow-lg"
                >
                  <CgNotes className="fs-3" />
                </motion.a>
                <span className="vertical_line"></span>
              </Col>
              <Col xs={11} md={10} lg={9}>
                <h2>Hi, I'm Somyaranjan</h2>
                <h5>
                  <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                      "Frontend Developer",
                      2500,
                      "React Js Developer",
                      2500,
                      "UI/UX Developer",
                      2500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </h5>

                <p className="text_secondary text-justify">
                  As a frontend developer with 1.7 years of experience, I
                  specialize in creating beautiful and user friendly web
                  interfaces that deliver a seamless user experience. I am
                  passionate about crafting well designed and responsive
                  websites that are not only visually appealing but also perform
                  optimally.
                </p>
                <motion.a
                  className="px-4 hire_btn rounded shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:mr.somyars@gmail.com"
                >
                  I'm looking to hire
                  <HiOutlineArrowNarrowRight className="ms-2" />
                </motion.a>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} md={6} className="d-none d-md-block">
          <img src={MAIN_BG_IMG} alt="main img" className="img-fluid" />
        </Col>
      </Row>
    </TransitionLayouts>
  );
}

export default Home;
