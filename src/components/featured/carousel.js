import React from "react";
import Slider from "react-slick";

import imageOne from "../../assets/images/image_01.jpg";
import imageTwo from "../../assets/images/image_02.jpg";
import imageThree from "../../assets/images/image_04.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageOne})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageTwo})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageThree})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
