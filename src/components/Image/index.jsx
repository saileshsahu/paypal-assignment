import React, { useEffect, useState } from "react";
import { ImgContainer } from "./style";
import Loading from "../../loader.gif";
import useImage, { Status } from "../../utils/useImage.util.js";

const Image = (props) => {
  const [status, image] = useImage(props.src);

  return (
    <ImgContainer>
      {status === Status.LOADING ? (
        <img
          src={Loading}
          width="100%"
          height="100%"
          style={{ objectFit: "contain" }}
        />
      ) : (
        <img
          src={props.src}
          width="100%"
          height="100%"
          style={{ objectFit: "contain" }}
        />
      )}
    </ImgContainer>
  );
};

export default Image;
