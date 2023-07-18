import React from "react";
import imgFacebook from '../../../images/facebook.png'
import imgTwitter from '../../../images/twitter.png'
import imgLinkedin from '../../../images/linkedin.png'
import imgTechnorati from '../../../images/technorati.png'
import imgMyspace from '../../../images/myspace.png'



const FollowUs = () => {
return (
    <div className="col_w270">
            <h4>Follow Us</h4>
            <p>
              Cras a volutpat lacus. Ut nisi metus, lobortis vel egestas at,
              condimentum.<a href="#"></a>
            </p>
  
            <ul id="social_box">
              <li>
                <a href="http://www.facebook.com/templatemo">
                  <img src={imgFacebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="http://www.facebook.com/templatemo">
                  <img src={imgTwitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="http://www.facebook.com/templatemo">
                  <img src={imgLinkedin} alt="linkin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={imgTechnorati} alt="technorati" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={imgMyspace} alt="myspace" />
                </a>
              </li>
            </ul>
          </div>
);

}

export default FollowUs;