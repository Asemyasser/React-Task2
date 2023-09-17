import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  const [modelState, setModel] = useState(false);

  function handleClick() {
    setModel((modelState) => !modelState);
  }
  let toggkeClassCheck = modelState
    ? " model position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex  justify-content-center align-items-center"
    : "model position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-none  justify-content-center align-items-center";
  const [image, setImage] = useState("");
  const ChangeImage = (src) => {
    setImage(src);
    handleClick();
  };

  useEffect(() => {
    if (!image) return;
  }, [image]);

  return (
    <>
      <div className="portfolio">
        <div className="contnet pt-4  text-center">
          <h2 className="fs-1 mb-3 fw-bolder">PORTFOLIO COMPONENT</h2>
          <div className="d-flex text-center align-items-center justify-content-center mb-3">
            <span className="line bg-black me-3"></span>
            <i className="fa-solid fa-star "></i>
            <span className="line bg-black ms-3"></span>
          </div>
          <div className="container">
            <div className="row g-5 ">
              <div className="col-lg-4 col-md-6">
                <div className="item rounded-3 overflow-hidden position-relative">
                  <LazyLoadImage
                    className="w-100 rounded-3"
                    src={img1}
                    alt=""
                  />
                  <div
                    onClick={() => ChangeImage(img1)}
                    className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item rounded-3 overflow-hidden position-relative">
                  <LazyLoadImage
                    className="w-100 rounded-3"
                    src={img2}
                    alt=""
                  />

                  <div
                    onClick={() => ChangeImage(img2)}
                    className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item rounded-3 overflow-hidden position-relative">
                  <LazyLoadImage
                    className="w-100 rounded-3"
                    src={img3}
                    alt=""
                  />
                  <div
                    onClick={() => ChangeImage(img3)}
                    className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item rounded-3 overflow-hidden position-relative">
                  <LazyLoadImage
                    className="w-100 rounded-3"
                    src={img1}
                    alt=""
                  />
                  <div
                    onClick={() => ChangeImage(img1)}
                    className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item rounded-3 overflow-hidden position-relative">
                  <LazyLoadImage
                    className="w-100 rounded-3"
                    src={img2}
                    alt=""
                  />
                  <div
                    onClick={() => ChangeImage(img2)}
                    className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item rounded-3 overflow-hidden position-relative">
                  <LazyLoadImage
                    className="w-100 rounded-3"
                    src={img3}
                    alt=""
                  />
                  <div
                    onClick={() => ChangeImage(img3)}
                    className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleClick} className={toggkeClassCheck}>
        <LazyLoadImage
          onClick={(e) => {
            e.stopPropagation();
          }}
          src={image}
        />
      </div>
    </>
  );
}
