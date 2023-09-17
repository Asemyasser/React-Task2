import React from "react";

export default function About() {
  return (
    <div className="about text-white d-flex justify-content-center align-items-center">
      <div className="contnet pt-4 text-white text-center">
        <h2 className="fs-1 mb-3 fw-bolder">ABOUT COMPONENT</h2>
        <div className="d-flex text-center align-items-center justify-content-center mb-3">
          <span className="line bg-white me-3"></span>
          <i className="fa-solid fa-star text-white"></i>
          <span className="line bg-white ms-3"></span>
        </div>
        <div className="d-flex justify-content-between text-start">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
