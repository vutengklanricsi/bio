import React from "react";
import "./styles/contacts.css";
import introPic from "./styles/contacts_pic.png";

export default function Introduction() {
  return (
    <>
      <div id="contacts" className="contacts-frame">
        <div className="contacts-image">
          <img className="contacts-header-img" src={introPic} alt="intro-pic" />
        </div>
        <div className="contacts-title">
          Vuong-Tan Quang Richard
          <div className="contacts-email-phone">
            Telephone: +36302734643 <br />
            Email: richard.vuongtanquang@gmail.com
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
