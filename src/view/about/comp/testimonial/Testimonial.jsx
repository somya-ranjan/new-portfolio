import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import { BsLinkedin } from "react-icons/bs";

// // static import
import TestimonialLoader from "../../../../components/loader/skeletion/testimonial/TestimonialLoader";
import RenderIf from "../../../../components/RenderIf";
import { AVATAR } from "../../../../assets/icon";
import { useGetTestimonialQuery } from "../../../../store/services";
import "./style.scss";

function Testimonial() {
  // redux state and api calling
  const { data: testimonialData, isLoading } = useGetTestimonialQuery();
  console.log(testimonialData, isLoading);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  // const testimonialData = [
  //   {
  //     quotes:
  //       "Lorem Lorem Lorem LoremLorem l Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem LoremLorem l Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem LoremLorem i LoremLorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
  //   },
  //   {
  //     quotes:
  //       "Lorem Lorem Lorem LoremLor em l Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem LoremLorem l Lorem Lorem Lorem LoremLorem",
  //   },
  // ];

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      {isLoading ? (
        <SwiperSlide>
          <TestimonialLoader />
        </SwiperSlide>
      ) : testimonialData?.length ? (
        testimonialData?.map((data) => (
          <SwiperSlide key={Math.random()}>
            <Row>
              <Col xs={12} className="quotes_container">
                <p className="quotes">
                  {data?.[
                    "What did you like about my work, work culture, and personality?"
                  ] || "N/A"}
                </p>
              </Col>
              <Col xs={12} className="bottom_container">
                <img src={AVATAR} alt="dummy user" className="img-fluid" />
                <p>{data?.Name || "N/A"}</p>
                <div className="d-flex justify-content-center">
                  <p className="me-2 text_muted">
                    {data?.Designation || "N/A"}
                  </p>
                  <a
                    href={
                      data?.["LinkedIn Profile URL"] ||
                      `https://www.linkedin.com/`
                    }
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide className="align-items-center">
          <p className="text-center text-muted">OOPS! Data not found</p>
        </SwiperSlide>
      )}
      <RenderIf render={testimonialData?.length > 1}>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </RenderIf>
    </Swiper>
  );
}

export default Testimonial;
