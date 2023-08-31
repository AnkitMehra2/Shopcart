import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ items }) => {
  const [showDropdown, setShowDropdown] = useState(false);
 
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);  

  };
  return (
    <nav>
        <ul className="navbar mobile">   
        {items.map(item => (
          <li key={item.id} className={item.child ? 'dropdown' : ''}>
            <Link to={item.child ? '#' : `/${item.id}`} onClick={toggleDropdown}>
              {item.name}
            </Link>
            {item.child && showDropdown && (
              <ul className="dropdown-menu">
                {item.child.map(childItem => (
                  <li key={childItem.id}>
                    <Link to={`/${childItem.id}`}>{childItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Nav = () => {
  
  const navbar =
    [{ name: 'Home', id: '' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact Us', id: 'contact' },
    ];
  
  // const Toggle = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  return (
    <>
      <div className={
        showMediaIcons? "mobile": "navbar"
      }>
        <Navbar items={navbar} />
      </div>

      <div className='hamburger-menu' >
        <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu />
        </a>
      </div>

    </>
  );
};

export default Nav;
