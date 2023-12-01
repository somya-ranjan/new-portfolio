import React, { memo, useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import "./resumeModal.scss";

function ResumeModal({ isOpen, close }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };
  console.log(isLoaded);
  return (
    <Modal
      size="md"
      isOpen={isOpen}
      backdrop="static"
      scrollable
      className="resume_main_container"
    >
      <div className="icon_container">
        <a
          href="../../assets/file/Somyaranjan Sethy Frontend ReactJs.pdf"
          // target="_blank"
          download
          // rel="noopener noreferrer"
        >
          <MdDownloadForOffline className="cp" />
        </a>
        <IoCloseCircleSharp className="cp" onClick={close} />
      </div>
      <ModalBody>
        <div className="resume">
          <iframe
            loading="lazy"
            onLoad={handleIframeLoad}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFz2XODMRI&#x2F;view?embed"
            allowfullscreen="allowfullscreen"
            allow="fullscreen"
          />
        </div>
      </ModalBody>
    </Modal>
  );
}

export default memo(ResumeModal);
