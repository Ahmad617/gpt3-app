import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'


function Footer() {
  
  return (
    <div className="footer section_padding">
      <div className="footer_heading">
        <h1 className="gradient_text">Do you want to step in to the futur before others</h1>
      </div>
      <div className="footer_button">
        <p>Request Early Access</p>
      </div>
      <div className="footer_links">
        <div className="footer_image">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwood K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwood K12 182 DK Alknjkcb, All Rights Reserved</p>
          <p>085-132567</p>
          <p>info@paymen.net</p>
        </div>
      </div>
      <div className="footer_copyright">
        <p>&#169; {new Date().getFullYear()} GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
