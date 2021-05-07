import React from "react";
import "./styles/contact.css";
import contactPic from "./styles/contact_pic.png";

export default function Introduction() {
  return (
    <>
      <div id="contact" className="contact-frame">
        <div className="contact-image">
          <img className="contact-header-img" src={contactPic} alt="intro-pic" />
        </div>
        <div className="contact-title">
          Vuong-Tan Quang Richard
          <div className="contact-email-phone">
            Telephone: +36302734643 <br />
            Email: richard.vuongtanquang@gmail.com
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
