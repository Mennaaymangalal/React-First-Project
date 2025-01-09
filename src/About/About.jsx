import React from "react";
import Linewhite from "../LineWhite/Linewhite";
import './About.css'

export default function About() {
  return (
    <>
      <div style={{ background: " #1abc9c" }}>
        <div className="container py-5">
          <div className="d-flex flex-column justify-content-center align-items-center text-white">
            <h2 className="fw-bold ">ABOUT</h2>
            <Linewhite />
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-12 px-3 text-white">
              <div className="paragh">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 px-3 text-white">
              <div className="paragh">
                <p>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
