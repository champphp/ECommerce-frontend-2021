import React from 'react'
import './FeaturedProducts.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasFaStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

function FeaturedProducts() {
  return (
    <div className="small-container">
      <h2 className="title">Featured Products</h2>
      <div className="row">
        <div className="col-4">
          <img src="images/product-1.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={farFaStar} className="fa" />
          </div>
          <p>$50.00</p>
        </div>

        <div className="col-4">
          <img src="images/product-2.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={farFaStar} className="fa" />
          </div>
          <p>$50.00</p>
        </div>

        <div className="col-4">
          <img src="images/product-3.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={faStarHalfAlt} className="fa" />
            <FontAwesomeIcon icon={farFaStar} className="fa" />
          </div>
          <p>$50.00</p>
        </div>

        <div className="col-4">
          <img src="images/product-4.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar}  className="fa" />
            <FontAwesomeIcon icon={fasFaStar}  className="fa" />
            <FontAwesomeIcon icon={faStarHalfAlt}  className="fa" />
          </div>
          <p>$50.00</p>
        </div>

      </div>

      <h2 className="title">Latest Products</h2>

      <div className="row">
        <div className="col-4">
          <img src="images/product-5.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={farFaStar} className="fa" />
          </div>
          <p>$50.00</p>
        </div>

        <div className="col-4">
          <img src="images/product-6.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={farFaStar} className="fa" />
          </div>
          <p>$50.00</p>
        </div>

        <div className="col-4">
          <img src="images/product-7.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={faStarHalfAlt} className="fa" />
            <FontAwesomeIcon icon={farFaStar} className="fa" />
          </div>
          <p>$50.00</p>
        </div>

        <div className="col-4">
          <img src="images/product-8.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar}  className="fa" />
            <FontAwesomeIcon icon={fasFaStar}  className="fa" />
            <FontAwesomeIcon icon={faStarHalfAlt}  className="fa" />
          </div>
          <p>$50.00</p>
        </div>

      </div>

      <div className="row">
        <div className="col-4">
          <img src="images/product-9.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={farFaStar} className="fa" />
          </div>
          <p>$50.00</p>
        </div>

        <div className="col-4">
          <img src="images/product-10.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={farFaStar} className="fa" />
          </div>
          <p>$50.00</p>
        </div>

        <div className="col-4">
          <img src="images/product-11.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={fasFaStar} className="fa" />
            <FontAwesomeIcon icon={faStarHalfAlt} className="fa" />
            <FontAwesomeIcon icon={farFaStar} className="fa" />
          </div>
          <p>$50.00</p>
        </div>

        <div className="col-4">
          <img src="images/product-12.jpg" alt="" />
          <h4>Red Printed T-Shirt</h4>
          <div className="rating">
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar} className="fa"  />
            <FontAwesomeIcon icon={fasFaStar}  className="fa" />
            <FontAwesomeIcon icon={fasFaStar}  className="fa" />
            <FontAwesomeIcon icon={faStarHalfAlt}  className="fa" />
          </div>
          <p>$50.00</p>
        </div>

      </div>

    </div>
  )
}

export default FeaturedProducts
