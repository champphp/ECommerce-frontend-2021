import React from 'react'
import './Testimonial.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasFaStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="row">

          <div className="col-3">
            <FontAwesomeIcon icon={faQuoteLeft} className="fa" />
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typestting industry. Lorem Ipsum has been the
              industry's standard dummy text ever
            </p>
            <div className="rating">
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={farFaStar} className="fa" />
            </div>
            <img src="images/user-1.png" alt="" />
            <h3>Sean Parker</h3>
          </div>

          <div className="col-3">
            <FontAwesomeIcon icon={faQuoteLeft} className="fa" />
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typestting industry. Lorem Ipsum has been the
              industry's standard dummy text ever
            </p>
            <div className="rating">
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={farFaStar} className="fa" />
            </div>
            <img src="images/user-2.png" alt="" />
            <h3>Mike Smith</h3>
          </div>

          <div className="col-3">
            <FontAwesomeIcon icon={faQuoteLeft} className="fa" />
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typestting industry. Lorem Ipsum has been the
              industry's standard dummy text ever
            </p>
            <div className="rating">
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={fasFaStar} className="fa" />
              <FontAwesomeIcon icon={farFaStar} className="fa" />
            </div>
            <img src="images/user-3.png" alt="" />
            <h3>Mabel Joe</h3>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Testimonial
