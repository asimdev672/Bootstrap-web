import React, { useState } from "react";
function Contact() {
  const [data, setData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    msg: "",
  });
  const inputEvent = (event) => {
    const {name, value} = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `my name is ${data.fullname} and my mobile number is ${data.mobile} and email is ${data.email} and my msg is ${data.msg}`
    );
  };
  return (
    <>
      <div className="text-center ">
        <h1>Our Services</h1>
      </div>
      <div className="container ">
        <div className="row col-lg-7 col-md-7 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name"
                name="fullname"
                value={data.fullname}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone No
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Mobile Number"
                name="mobile"
                value={data.mobile}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="email"
                value={data.email}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="msg"
                value={data.msg}
                onChange={inputEvent}
              ></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
