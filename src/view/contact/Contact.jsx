import React, { useState } from "react";
import { Col, Row, Spinner } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// // static import
import TransitionLayouts from "../../layouts/transition/TransitionLayouts";
import TopElement from "../../components/topElement/TopElement";
import SuccessModal from "./successModal/SuccessModal";
import toaster from "../../utility/toaster";
import { MAIL } from "../../assets/icon";
import "./style.scss";

function Contact() {
  const [isLoading, setLoading] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handelSubmit = (event, value) => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_ly6l5fd",
        "template_s7073kv",
        event.target,
        "-XFQcIml29VS7GyL7"
      )
      .then(
        (result) => {
          toaster.success(result.text);
          setLoading(false);
          setOpenSuccessModal(true);
        },
        (error) => {
          toaster.error(error.text);
          setLoading(false);
        }
      );
    setLoading(false);
  };

  return (
    <>
      <TransitionLayouts className="contact_hero">
        <TopElement
          name="Contact Me"
          icon={MAIL}
          content="If you have any questions, please feel free
to drop me a line. If you don't get an
answer immediately, I might just be
traveling through the middle of nowhere.
I'll get back to you as soon as I can. That's
a promise!"
        />
        <Row className="justify-content-center mb-4">
          <Col xs={12} sm={9} lg={8} xl={6}>
            <AvForm onValidSubmit={handelSubmit}>
              <Row>
                <Col xs={12} md={6}>
                  <AvField
                    name="name"
                    type="text"
                    className="input_bg text_primary"
                    placeholder="Name"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Please enter your name",
                      },
                    }}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <AvField
                    name="email"
                    type="email"
                    className="input_bg text_primary"
                    placeholder="Email"
                    rows={10}
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Please enter your email",
                      },
                    }}
                  />
                </Col>
                <Col xs={12}>
                  <AvField
                    name="subject"
                    type="text"
                    className="input_bg text_primary"
                    placeholder="Subject"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Please enter subject",
                      },
                    }}
                  />
                </Col>
                <Col xs={12}>
                  <AvField
                    name="message"
                    type="textarea"
                    className="input_bg text_primary"
                    placeholder="Message"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Please enter message",
                      },
                    }}
                  />
                </Col>
                <div className="text-center mt-2 ">
                  <motion.button
                    className="col-5 primary_btn shadow-lg rounded"
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isLoading ? <Spinner size="sm" /> : "Submit"}
                  </motion.button>
                </div>
              </Row>
            </AvForm>
          </Col>
        </Row>
        <SuccessModal isOpen={openSuccessModal} setOpen={setOpenSuccessModal} />
      </TransitionLayouts>
    </>
  );
}

export default Contact;
