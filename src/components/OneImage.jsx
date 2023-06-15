import ModalImage from "./ModalImage";
import { useState } from "react";
function OneImage({ image }) {
  const [show, setShow] = useState(false);
  let styleObj = { width: "100%", marginBottom: "10px" };

  return (
    <>
      <img
        onClick={() => setShow(true)}
        style={styleObj}
        src={image.urls.small}
        alt={image.title}
      />
      <ModalImage selectImg={image} show={show} setShow={setShow} />
    </>
  );
}

export default OneImage;
