import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <section className="footer">
    <h4>About Us</h4>
    <p>ZikrahBooks  is a website that allow user to Find the best books for your favourite writer.</p>
    
    <div className="icons">
    <FaFacebook className='icon'/>
    <FaSquareXTwitter className='icon' />
    <FiInstagram  className='icon'/>
    <FaLinkedin  className='icon'/>
       
    </div>
    <p> Made with <FaHeart className='icon'/> by ZikrahBooks </p>
</section>
    </div>
  )
}

export default Footer
