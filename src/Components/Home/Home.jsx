import React from "react";
import img from "../../assets/avataaars.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center text-white">
      <div className="text-center ">
        <LazyLoadImage src={img} alt width={"250px"} />
        <div className="contnet pt-4 text-white text-center">
          <h2 className="fs-1 mb-3 fw-bolder">START FRAMEWORK</h2>
          <div className="d-flex text-center align-items-center justify-content-center mb-3">
            <span className="line bg-white me-3"></span>
            <i className="fa-solid fa-star text-white"></i>
            <span className="line bg-white ms-3"></span>
          </div>
          <span>Graphic Artist - Web Designer - Illustrator</span>
        </div>
      </div>
    </div>
  );
}
