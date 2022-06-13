import React, { useState } from "react";
import { ImGithub,ImLinkedin,ImFacebook,ImStackoverflow} from "react-icons/im";
import {Link} from "react-router-dom"

function Footer({ client }) {
  const [fullName, setFullName] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);

  const send = async (e) => {
    e.preventDefault();
    await client
      .post("/", {
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  
  return (
    <div class="footer">
      <div class="contactUs">
        <div class="digital">
          <b id="digital">contact details</b>
          <div class="social">
            <li className="social-list-item"><a href="https://github.com/DeepHansda" className="social-icon"><ImGithub/></a></li>
            <li className="social-list-item"><a href="https://www.linkedin.com/in/deep-hansda-dcst-44627a20a/" className="social-icon"> <ImLinkedin/></a></li>
            <li className="social-list-item"><a href="https://stackoverflow.com/users/16403609/deep-hansda" className="social-icon"><ImStackoverflow/></a></li>
          </div>

          <div id="contact">
            <li id="phone">1236547884</li>
            <li>deephansda921@gmail.com</li>
          </div>
        </div>

        <div class="form">
          <form onSubmit={send}>
            <input
              type="text"
              value={fullName}
              placeholder="Enter your full name"
              id="fullName"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="number"
              value={phoneNumber}
              placeholder="Enter your phone number"
              id="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Enter your email address"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              value={message}
              type="text"
              id="textarea"
              placeholder="Enter your Massage"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input type="submit" id="button" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
