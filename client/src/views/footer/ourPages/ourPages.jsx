import React from "react";

const OurPages = () => {
    return (
        <div className="col_w270">
            <h4>Our Pages</h4>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="contact.html" className="last">
                  Contact
                </a>
              </li>
            </ul>
          </div>
    );
}

export default OurPages ;