import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import Header from './../Header/Header'
import Categories from './Categories/Categories'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'

function Home() {
  return (
    <React.Fragment>
      <div className="header">
        <div className="container">
          <Header />
          <div className="row">
            <div className="col-2">
              <h1>Give Your Workout<br /> A New Style!</h1>
              <p>
                Success isn't always about greatness.
                It's about consistency.
          Consistent<br />  hard work gains success.
          Greatness will come.
          </p>
              <Link to="/" className="btn">Explore Now &#10132; </Link>
            </div>
            <div className="col-2">
              <img src="images/image1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <FeaturedProducts />
    </React.Fragment>
  )
}

export default Home
