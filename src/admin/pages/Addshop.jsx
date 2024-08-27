import React, { useState } from "react";
import AHeader from "../common_components/AHeader";
import AFooter from "../common_components/AFooter";
import axios from "axios";
import PHead from "../../website/common_components/PHead";

function Addshop() {
  const [addshop, setaddshop] = useState({
    id: "",
    pname: "",
    pimage: "",
    pprice: "",
    poprice: "",
  });

  const onChangeHandle = (e) => {
    setaddshop({
      ...addshop,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    const res = await axios.post(`http://localhost:3000/shop`, addshop);
    console.log(res);

    setaddshop({
      id: "",
      pname: "",
      pimage: "",
      pprice: "",
      poprice: "",
    });
  };
  return (
    <>
      <AHeader />
      <PHead h1cn="Add Shop" pnm="Add Shop" />
      <div className="col">
        <div className="contact-form">
          <div id="" />
          <form
            onSubmit={(e) => submitHandle(e)}
            name="sentMessage"
            id="contactForm"
            noValidate="novalidate"
          >
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="pname"
                value={addshop.pname}
                onChange={(e) => onChangeHandle(e)}
                placeholder="Add product Name"
                required="required"
                data-validation-required-message="Please enter your name"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="url"
                className="form-control"
                name="pimage"
                value={addshop.pimage}
                onChange={(e) => onChangeHandle(e)}
                id="email"
                placeholder="Add Image"
                required="required"
                data-validation-required-message="Please enter your email"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="number"
                className="form-control"
                name="pprice"
                value={addshop.pprice}
                onChange={(e) => onChangeHandle(e)}
                id="subject"
                placeholder="Add price"
                required="required"
                data-validation-required-message="Please enter a subject"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="number"
                className="form-control"
                name="poprice"
                value={addshop.poprice}
                onChange={(e) => onChangeHandle(e)}
                id="subject"
                placeholder="Add Old Price"
                required="required"
                data-validation-required-message="Please enter a subject"
              />
              <p className="help-block text-danger" />
            </div>

            <div>
              <button
                className="btn btn-primary py-2 px-4"
                type="submit"
                id="sendMessageButton"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <AFooter />
    </>
  );
}

export default Addshop;
