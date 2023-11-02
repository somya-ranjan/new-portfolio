import React, { memo } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import {
  REACT,
  JS,
  MU_UI,
  TAILWIND_CSS,
  HTML,
  CSS,
  SASS,
  BOOTSTRAP,
  REACTSTRAP,
  REACT_BOOTSTRAP,
  REDUX,
  REDUX_SAGA,
  FORMIK,
  AV_FORM,
  CI_CD,
  GITHUB,
  VITE,
  NEXTJS,
} from "../../../../assets/icon";
import "./style.scss";

function Skills() {
  const skills = [
    { icon: REACT, label: "React Js" },
    { icon: NEXTJS, label: "Next Js" },
    { icon: JS, label: "Javascript" },
    { icon: MU_UI, label: "Material UI" },
    { icon: TAILWIND_CSS, label: "Tailwind Css" },
    { icon: SASS, label: "Sass" },
    { icon: HTML, label: "Html5" },
    { icon: CSS, label: "Css3" },
    { icon: BOOTSTRAP, label: "Bootstrap" },
    { icon: REACTSTRAP, label: "Reactstrap" },
    { icon: REACT_BOOTSTRAP, label: "React Bootstrap" },
    { icon: REDUX, label: "Redux" },
    { icon: REDUX, label: "Redux Toolkit" },
    { icon: REDUX_SAGA, label: "Redux Saga" },
    { icon: REDUX, label: "RTK Query" },
    { icon: FORMIK, label: "Formik & Yup" },
    { icon: AV_FORM, label: "AV From" },
    { icon: VITE, label: "Vite" },
    { icon: GITHUB, label: "Github" },
    { icon: CI_CD, label: "CI/CD" },
  ];
  return (
    <Container fluid>
      <Row>
        {skills.map((ele) => (
          <Col
            xs={4}
            sm={2}
            md={3}
            key={Math.random()}
            className="mb-1 skills_container"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cp shadow-lg"
            >
              <img src={ele.icon} />
              <p className="text_secondary">{ele.label}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default memo(Skills);
