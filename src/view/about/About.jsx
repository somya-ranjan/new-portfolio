import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// // static import
import TransitionLayouts from "../../layouts/transition/TransitionLayouts";
import { ABOUT } from "../../assets/icon";
import TopElement from "../../components/topElement/TopElement";
import Skills from "./comp/skills/Skills";
import Testimonial from "./comp/testimonial/Testimonial";
import Contact from "./comp/contact/Contact";
import "./style.scss";

function About() {
  const [currentTab, setCurrentTab] = useState(0);
  const theme = useTheme();

  const handelTabs = (e, val) => {
    setCurrentTab(val);
  };
  const handleChangeIndex = (index) => {
    setCurrentTab(index);
  };
  return (
    <TransitionLayouts className="about_me_hero">
      <TopElement name="About Me" icon={ABOUT} />
      <Row className="pb-4 pb-md-0 justify-content-between">
        <Col xs={12} md={5} lg={5} xl={6} className="about_me_container">
          <ul>
            <li>
              Hello, I'm Somyaranjan, a dedicated frontend developer with 2
              years of professional experience. My primary focus is on creating
              visually appealing and user-friendly web interfaces that offer a
              seamless and enjoyable user experience. I'm deeply passionate
              about crafting well-designed and responsive websites that not only
              look great but also perform optimally.
            </li>
            <li>
              My expertise spans a wide range of frontend development
              technologies, including HTML, CSS, JavaScript, Material-UI,
              Tailwind CSS, Bootstrap, and I have extensive experience with
              frameworks such as React and Next.js. I take pleasure in
              collaborating with clients and teams to devise creative solutions
              that align with their specific business objectives and user
              requirements. In my work, I prioritize achieving a harmonious
              blend of design and functionality, ensuring that the end product
              is not only aesthetically pleasing but also highly intuitive to
              use.
            </li>
            <li>
              Over the years, I've been fortunate to work on a multitude of
              frontend web development projects, spanning from simple landing
              pages to complex web applications. I have a proven track record of
              successful collaboration with designers, backend developers, and
              various stakeholders, guiding projects from concept to launch.
            </li>
            <li>
              As a frontend developer, I'm fully committed to staying current
              with the latest industry trends and best practices. I'm
              continually seeking fresh challenges and opportunities to enhance
              my skills and take on exciting projects. If you're in search of a
              frontend developer who can bring your vision to life, please don't
              hesitate to reach out and connect with me. I'm eager to hear from
              you!
            </li>
          </ul>
        </Col>
        <Col xs={12} md={7} lg={7} xl={5} className="tab_container">
          <Tabs
            value={currentTab}
            onChange={handelTabs}
            centered
            className="tabs shadow rounded"
          >
            <Tab label="Tech Stack" className="tab" />
            <Tab label="Testimonial" className="tab" />
            <Tab label="Contact" className="tab" />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={currentTab}
            onChangeIndex={handleChangeIndex}
          >
            <TabContent value={currentTab} index={0}>
              <Skills />
            </TabContent>
            <TabContent value={currentTab} index={1}>
              <Testimonial />
            </TabContent>
            <TabContent value={currentTab} index={2}>
              <Contact />
            </TabContent>
          </SwipeableViews>
        </Col>
      </Row>
    </TransitionLayouts>
  );
}

function TabContent(props) {
  const { children, value, index } = props;
  return (
    <div className="tabs_content">{value === index && <>{children}</>}</div>
  );
}

export default About;
