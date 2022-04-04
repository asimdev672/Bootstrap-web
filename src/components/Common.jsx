import React from "react";
import { Link } from "react-router-dom";

function Common(props) {
  return (
    <>
      <div id="header" className="container-fluid ">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              <div className="col-lg-6 pt-lg-5 ">
                <h1 className="pt-lg-5 mt-lg-5">
                  {props.heading}
                  <strong className="strong "> Muhammad Asim</strong>
                </h1>
                <p>We are the team of talented devloper making website</p>
                <Link to={props.linkTo} className="btn-ger-started mb-sm-5">
                  {props.btn}
                </Link>
              </div>
              <div className="col-lg-6">
                <img
                  src={props.imgsrc}
                  alt="searching"
                  className="animated"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Common;
