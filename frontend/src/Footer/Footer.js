import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h1>Download Our App</h1>
            <h3>Download App for Android and ios mobile phone.</h3>
            <div className="app-logo">
              <img src="images/play-store.png" alt="" />
              <img src="images/app-store.png" alt="" />
            </div>
          </div>

          <div className="footer-col-2">
            <img src="images/logo-white.png" alt="" />
            <h3>
              Our Purpose Is To Sustainably Make the Pleasure and
              Benefits of Sports Accessible to the Many.
            </h3>
          </div>

          <div className="footer-col-3">
            <h3>UseFul Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>

          <div className="footer-col-4">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
