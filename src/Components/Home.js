import React from 'react';
import './home.css';
import logo from './mainImage.png';
import star from './Star 3.png';
import star1 from './Star 4.png';

function Home(){
    return(
        <div className='Home'>
            <div className='lowermain'>
                <h1 className='helo1'>Fresh</h1>
                <h1 className='helo2'> 2K22</h1>
                <h1 className='helo3'> Look</h1>
                </div>
            <div className='conta'>
                <img className='star1' src={star} alt='dummy alt'/>
                <img className='star2' src={star1} alt='dummy alt'/>
                <img className='mainImage' src={logo} alt='dummy-alt'/> 
                <hr className='break' />
                <p className='text'>Oregon jacket</p>
                <p className='text2' >$124</p>
            </div> 
            <button className='butn'>See more &#8599;</button>   
        </div>
    );
}

export default Home;