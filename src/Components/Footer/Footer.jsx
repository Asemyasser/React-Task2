import React from "react";

export default function Footer() {
  return (
    <div className="footer mt-auto ">
      <div className="footer-one p-5">
        <div className=" container">
          <div className="row">
            <div className="col-md-4 ">
              <div className=" text-center text-white p-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className=" text-center text-white p-4">
                <h3>AROUND THE WEB</h3>
                <div className="social-icons">
                  <i className="fa-brands fa-facebook mx-1 border border-1 rounded-circle p-2"></i>
                  <i className="fa-brands fa-twitter mx-1 border border-1 rounded-circle p-2"></i>
                  <i className="fa-brands fa-linkedin-in mx-1 border border-1 rounded-circle p-2"></i>
                  <i className="fa-solid fa-globe mx-1 border border-1 rounded-circle p-2"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className=" text-center text-white p-4">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-white text-center p-4">
        <p>Copyright &copy; Your Website 2021</p>
      </div>
    </div>
  );
}
