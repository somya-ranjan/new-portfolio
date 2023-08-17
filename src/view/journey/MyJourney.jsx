import React from "react";
import { Row, Col } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AiFillStar } from "react-icons/ai";

// // static import
import TransitionLayouts from "../../layouts/transition/TransitionLayouts";
import TopElement from "../../components/topElement/TopElement";
import { MY_JOURNEY } from "../../assets/icon";
import { journeyData } from "./journeyData";

function MyJourney() {
  return (
    <TransitionLayouts className="journey_hero">
      <TopElement name="My Journey" icon={MY_JOURNEY} />
      <Row className="justify-content-center mb-4">
        <Col xs={12}>
          <VerticalTimeline>
            {journeyData?.map((ele) => (
              <VerticalTimelineElement
                key={Math.random()}
                contentStyle={{
                  background: ele.backgroundColor,
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${ele.backgroundColor}`,
                }}
                date={ele.duration}
                iconStyle={{ background: ele.backgroundColor, color: "#fff" }}
                icon={<ele.icon />}
              >
                <h3>{ele.heading}</h3>
                <h5>{ele.subHeading}</h5>
                <p>{ele.description}</p>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{ background: "#2196F3", color: "#fff" }}
              icon={<AiFillStar />}
            />
          </VerticalTimeline>
        </Col>
      </Row>
    </TransitionLayouts>
  );
}

export default MyJourney;
