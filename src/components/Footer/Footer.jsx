import React from 'react';

import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <div className="footer__content row">
        <div className="footer__content-left col">
          <div className="title">Newslatter</div>
          <form className="footer__mail row">
            <input type="text" placeholder="Enter your email" name="email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <div className="footer__content-right col">
          <div className="footer__cards row">
            <div className="card col">
              <div className="title">Support</div>
              <div className="link">About Us</div>
              <div className="link">Careers</div>
              <div className="link">Blog</div>
            </div>
            <div className="card col">
              <div className="title">Useful Link</div>
              <div className="link">Payment & Tax</div>
              <div className="link">Team of service</div>
              <div className="link">Privaci Policy</div>
            </div>
            <div className="card col">
              <div className="title">Our Menu</div>
              <div className="link">Best Product</div>
              <div className="link">Category</div>
            </div>
            <div className="card col">
              <div className="title">Address</div>
              <div className="link">JL. Setiabudhi No. 193 Sukasari, Bandung <br /> West Java, Indonesia</div>
              <div className="link">hallo@daunku.com</div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">© 2022 Daunku - All rights reserved.</div>
    </div>
  </div>
);

export default Footer;
