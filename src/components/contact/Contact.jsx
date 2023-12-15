import React from "react";
import Popup from "reactjs-popup";
import burger2 from "../../assets/burger2.png"

function Contact() {
  return (
    <div className="contact">
      <form 
        action="
        "
      >
        <input type="text" placeholder="john" />
        <input type="email" placeholder="john@gmail.com" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Write your message here"></textarea>

        <Popup trigger={<button type="button">Send</button>}></Popup>
      </form>

      <div className="formBorder">
        <div>
            <img src={burger2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
