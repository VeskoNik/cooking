import React from 'react';
import FollowUs from './followUs/followUs';
import OurPages from './ourPages/ourPages';
import Partners from './partners/partners';

const Footer = () => {
    return (
        <div id="templatemo_footer_wrapper">
            <div id="templatemo_footer">
                <FollowUs />

                <OurPages />

                <Partners />

                <div className="cleaner"></div>
            </div>
        </div>
    );
};

export default Footer;
