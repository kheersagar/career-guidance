import React from "react";

//css
import "./Newsletter.css";

//icon
import name_icon from "../../Image/Icons/name_icon.png";
import email_icon from "../../Image/Icons/email_icon.png";
import course_icon from "../../Image/Icons/course_icon.png";
import phone_icon from "../../Image/Icons/phone_icon.png";
import { Button } from "react-bootstrap";

function Newsletter() {
  return (
    <div className="newsletter_main">
      <div className="news_title">
        <div className="news_text1">Subscribe to our newsletter</div>
        <div className="news_text2">Recieve updates instantly</div>
      </div>
      <div className="input_field_section">
        <div className="name_email">
          <div className="input-container">
            <img src={name_icon} className="icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              name="usrnm"
            />
            </div>
          {/* email */}
          <div className="input-container">
            <img src={email_icon} className="icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              name="usrnm"
            />
          </div>
        </div>
      <div className="phone_course">
        {/* phone */}
        <div className="input-container">
            <div className="icon icon_text">+91</div>
            <img src={phone_icon} className="icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              name="usrnm"
            />
          </div>
        {/* course */}
        <div className="input-container">
            <img src={course_icon} className="icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              name="usrnm"
            />
        </div>
      </div>
        <div className="news_apply_section">
          <div className="already_registred_text">Resister your self ? click here</div>
          <div><Button className="subs_btn">Subscribe</Button></div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
