import React, { useRef, useState } from 'react';
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
  const formRef = useRef(null); 
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ytpng87', 'template_t5cm4qa', formRef.current, 'JWNfSSu16VpSI1ZCm')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          formRef.current.reset(); 
          setShowMessage(true); 
          setTimeout(() => setShowMessage(false), 5000); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={formRef} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter your Email address to join us" />
          <button type="submit" className='btn btn-j'>Join Now</button>
        </form>
        {showMessage && (
          <div className="join-message">
            <p>Thank you for your interest! Our team member will contact you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Join;
