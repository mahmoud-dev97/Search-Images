import React from "react";
import { Modal } from "react-bootstrap";

function ModalImage({ show, setShow, selectImg }) {
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)} centered>
      <img src={selectImg.urls.full} alt={selectImg.title} />
    </Modal>
  );
}

export default ModalImage;
