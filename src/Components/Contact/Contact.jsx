import React from "react";

export default function Contact() {
  return (
    <div className="contact mb-4">
      <div className="container pt-3">
        <div className="contnet pt-4 text-center">
          <h2 className="fs-1 mb-3 fw-bolder">CONATCT SECTION</h2>
          <div className="d-flex text-center align-items-center justify-content-center mb-3">
            <span className="line bg-black me-3"></span>
            <i className="fa-solid fa-star "></i>
            <span className="line bg-black ms-3"></span>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action=""
          className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched"
        >
          <label htmlFor="userName" className="position-relative top-0 top">
            userName
          </label>
          <input
            id="userName"
            placeholder="userName"
            type="text"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          />
          <label htmlFor="userAge" className="position-relative top-0 top">
            userAge :
          </label>
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          ></input>
          <label htmlFor="userEmail" className="position-relative top-0 top">
            userEmail :{" "}
          </label>
          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          ></input>
          <label htmlFor="userPassword" className="position-relative top-0 top">
            userPassword :
          </label>
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          ></input>
          <button
            className="btn mt-4 text-white"
            style={{ backgroundColor: "#1abc9c" }}
          >
            send Message
          </button>
        </form>
      </div>
    </div>
  );
}
