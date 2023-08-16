import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { HiOutlineExternalLink } from "react-icons/hi";
import { PiGithubLogoFill } from "react-icons/pi";

// // static import
import TransitionLayouts from "../../layouts/transition/TransitionLayouts";
import TopElement from "../../components/topElement/TopElement";
import { PROJECT } from "../../assets/icon";
import { projectData } from "./projectData";
import "./style.scss";

function Project() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <TransitionLayouts className="project_hero">
      <TopElement name="My Project" icon={PROJECT} />
      <Row className="pb-4 pb-md-0">
        <Col xs={12}>
          <Swiper
            modules={[Pagination, Mousewheel, Autoplay]}
            direction="vertical"
            loop={true}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            autoplay={{
              delay: 20000,
              disableOnInteraction: false,
            }}
          >
            {projectData.map((data) => (
              <SwiperSlide key={Math.random()}>
                <Container fluid>
                  <Row className="project_container">
                    <Col xs={12} md={6}>
                      <img srcSet={data.img} className="img-fluid" />
                    </Col>
                    <Col xs={12} md={6}>
                      <h4 className="text-capitalize">{data.name}</h4>
                      <div className="pt-3">
                        <p className="mb-0 text-start">Project Overview:</p>
                        <p className="text_justify text_secondary ms-4 fs-6">
                          {data.project.details}
                        </p>
                        <p className="mb-0 text-start">Tech Stack:</p>
                        <p className="text_justify text_secondary ms-4 fs-6">
                          {data.project.techStack}
                        </p>
                        <p className="mb-0 text-start">Compatible For:</p>
                        <p className="text_justify text_secondary ms-4 fs-6">
                          {data.notCompatibleFor.mobile ? (
                            <>
                              <del> Mobile,</del>
                              <span> Tablet, Laptop, Large Screen</span>
                            </>
                          ) : (
                            <span>Mobile, Tablet, Laptop, Large Screen</span>
                          )}
                        </p>
                        <div className="text-center external_link">
                          <a href={data.liveLink} target="_blank">
                            <HiOutlineExternalLink />
                          </a>
                          <a href={data.gitLink} target="_blank">
                            <PiGithubLogoFill />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            ))}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </Col>
      </Row>
    </TransitionLayouts>
  );
}

export default Project;
