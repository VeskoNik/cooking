import React from 'react';
import image1 from '../../images/templatemo_logo.png'
import Navigation from './navigation/navigation';


const Header = () => {
  return (
    
    <div id="templatemo_header">
      <div id="header_left">
        <div id="site_title">
          <a href="index.html">
            <img src={image1} alt="logo" />
            <span>Your tagline goes here</span>
          </a>
        </div>
      </div>

      <Navigation />

      <div className="cleaner"></div>
    </div>
  );
};

export default Header;
