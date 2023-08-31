import React from 'react';
import './Header.css';
// import MaterialIcon from 'material-icons-react';
import {FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaTruck } from "react-icons/fa";


function Header() {
    return (
        <div className='Header'>
            <div className='mainh'>
                
                <h5><FaTruck/>  Free Delivery  | Return Policy</h5>
                <h6 className='connect'> Login &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Follow Us   
                     &nbsp;&nbsp;<FaFacebook/>&nbsp;&nbsp;<FaLinkedin/> &nbsp;&nbsp;<FaTwitter/> &nbsp;&nbsp;<FaInstagram/>
                     </h6>
            </div>
            <div className='second'>
            <h1 className='name'>Shopcart</h1>
            <h2>WISHLIST(0)&nbsp; BAG(0) </h2>
            </div>
        </div>
    )
};
export default Header;