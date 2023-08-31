import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className='Contact'>
            <div className='upper'>
                <div className='left'>
                    <h4 className='news'>Newslleter</h4>
                    <p className='get'>Get news about articles and updates </p>
                    <span>in your inbox.</span>
                </div>
                <div className="right">
                    <label>NAME</label>
                    <input className='typo' type='text'></input>
                    <div className='liner'></div>
                    <label>EMAIL</label>
                    <input className='typo' type='text'></input>
                    <div className='liner'></div>
                    <label>MESSAGE</label>
                    <input className='typo' type='text'></input>
                    <div className='liner'></div>
                </div>
            </div>
            <div className='lower'>
                <h1 className='hel1'>GET</h1>
                <h1 className='hel2'> IN TOUCH</h1>
                
                <div className='eclipse'>
                   <h3 className='btn'>SEND</h3>
                </div>
            </div>
            
            <div className='footer'>
                <p>Copyright 2022 all rights reserved by SG</p>
            </div>
        </div>
    )
}
export default Contact;