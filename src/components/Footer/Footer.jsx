import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (

    <div className="footer-container">
      <hr />
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/NitinParamkar" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/nitin-paramkar-aa833b269" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Footer
