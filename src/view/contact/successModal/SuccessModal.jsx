import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { BsCheck2 } from "react-icons/bs";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./style.scss";

function SuccessModal({ isOpen, setOpen }) {
  const navigate = useNavigate();

  return (
    <Modal
      isOpen={isOpen}
      centered
      size="md"
      backdrop="static"
      className="bg-transparent contact_success_modal"
    >
      <ModalBody className="py-4">
        <BsCheck2 className="check_icon" />
        <h5>
          I have received your message, soon we will get in touch with you.
        </h5>
        <h6 className="text-center mt-3">Thank You !</h6>
        <Button
          type="button"
          className="mx-auto d-block px-4 primary_btn"
          onClick={() => {
            navigate("/");
            setOpen(false);
          }}
        >
          <HiOutlineArrowNarrowLeft className="me-2" />
          Go to Home
        </Button>
      </ModalBody>
    </Modal>
  );
}

export default SuccessModal;
