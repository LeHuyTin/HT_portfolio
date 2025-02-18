import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Here is my contact information, you can reach out and I am happy to
            reply to you anytime.
          </p>
          <div className="contact-detail">
            <img src={mail_icon} alt="" />
            <p>tnlhuy@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={phone_icon} alt="" />
            <p>0963 269 711</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" />
            <p>157 Tan Ky Tan Quy, Tan Son Nhi, Tan Phu, Ho Chi Minh city</p>
          </div>
        </div>
        <div className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            row="10"
            placeholder="Enter your message here"
          ></textarea>
          <button type="submit" className="contact-submit">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
