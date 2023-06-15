import React from "react";
import OneImage from "./OneImage";

function ImageList({ imgList }) {
  let styleObj = { columnGap: "10px", columns: "6 200px" };
  return (
    <div className="mt-4" style={styleObj}>
      {imgList.length > 0 &&
        imgList.map((image) => <OneImage image={image} key={image.id} />)}
    </div>
  );
}

export default ImageList;
