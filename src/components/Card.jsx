import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {props.title}</h5>
            <p className="card-text">
              Some quick bulk of the card's content.
            </p>
            <Link to="" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
