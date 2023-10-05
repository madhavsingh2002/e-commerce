import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import Logo from '../../Assets/Logo.png'
const Footer = () => {
  return (
    // Footer section container
    <section className="footer  mt-5">
      {/* Top section of the footer */}
      <div className="footer_top">
        <div className="footerLink">
          <li id="footer_title" className="mb-3">
            
            <Link to="">
                <img style={{height:'50px',background:'white'}} src={Logo} alt="" />
            </Link>
          </li>
          <li>
            
            <Link to="/">Home</Link>
          </li>
          <li>
            
            <Link to="login">Login</Link>
          </li>
          <li>
            
            <Link to="collection">Collection</Link>
          </li>
        </div>

        {/* Footer links for Women */}
        <div className="footerLink">
          <li id="footer_title" className="mb-3">
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/">FAQ's</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Email</Link>
          </li>
        </div>

        {/* Footer links for Men */}
        <div className="footerLink">
          <li id="footer_title" className="mb-3">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/collection">Products Details</Link>
          </li>
          <li>
            {" "}
            <Link to="/dashboard/user/orders">Orders</Link>
          </li>
        </div>

      </div>

      {/* Bottom section of the footer */}
      <div className="footer_bottoms">
        <hr style={{color:"white"}} /> {/* Horizontal line */}
        <h5 style={{color:'white'}}>© Copyright Reserved to Madhav-Singh</h5> {/* Copyright information */}
      </div>
    </section>
  );
};

export default Footer;
