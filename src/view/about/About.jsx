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
              Hi.. I'm Somyaranjan, as a frontend developer with 1.7 years of
              experience, I specialize in creating beautiful and user friendly
              web interfaces that deliver a seamless user experience. I am
              passionate about crafting well designed and responsive websites
              that are not only visually appealing but also perform optimally.
            </li>
            <li>
              My expertise lies in a range of frontend development technologies,
              including HTML, CSS, JavaScript, MaterialUi, TailwindCSS,
              BootStrap and frameworks like React and NextJS. I enjoy working
              with clients and teams to develop creative solutions that meet
              their specific business goals and user needs. In my work, I always
              strive to strike a balance between design and functionality,
              ensuring that the final product is both aesthetically pleasing and
              easy to use.
            </li>
            <li>
              Over the years, I have had the privilege of working on numerous
              frontend web development projects, ranging from simple landing
              pages to complex web applications. I have experience collaborating
              with designers, backend developers, and other stakeholders to
              bring projects from concept to launch.
            </li>
            <li>
              As a frontend developer, I am committed to staying up-to-date with
              the latest trends and best practices in the industry. I am always
              looking for new challenges and opportunities to improve my skills
              and take on exciting projects. If you're looking for a frontend
              developer who can help bring your vision to life, feel free to
              connect with me or drop me a message. I'd love to hear from you!
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
