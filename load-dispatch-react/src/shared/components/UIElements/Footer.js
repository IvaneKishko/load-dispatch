import React from "react";

import './Footer.css'

const Footer = () => {
  return (
    <>  
      <div class="footer">
        <div class="inner-footer">
          <div class="footer-items">
            <h1>Load Dispatch</h1>
            <p>Central Dispatch is the most cost-effective way to manage transportation on your own.</p>
          </div>

          <div class="footer-items">
            <h3>HOW DOES IT WORK?</h3>
            <div class="border1"></div>
            <ul className="footer-ul">
              <a href="#">
                <li>Carriers</li>
              </a>
              <a href="#">
                <li>Brokers</li>
              </a>
              <a href="#">
                <li>Shippers</li>
              </a>
            </ul>
          </div>

          <div class="footer-items">
            <h3>Contact us</h3>
            <div class="border1"></div>
            <ul className="footer-ul">
              <li>
                <i class="fa fa-map-marker" aria-hidden="true"></i>TBS, GEO
              </li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>123456789
              </li>
              <li>
                <i class="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com
              </li>
            </ul>

            <div class="social-media">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">Copyright &copy; Load Dispatch 2023.</div>
      </div>
    </>
  );
};

export default Footer;
