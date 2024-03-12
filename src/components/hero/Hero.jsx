import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="hero__section">
        <div className="hero__wrapper">
            <div className="hero__content">
                <span className='present'>-Presents</span>
                <h4>5th Assemblage of The Bridge Council Educational Annual Conference Africa 2024</h4>
                <h3>The Rise <span>of African</span></h3>
                <h1>Evolution</h1>
                <h3 className='black'>The Convergence of</h3>
                <div className="toAttend">
                    <p>
                        Educators | Parents | Students | Community Leaders Educational Practitioners | Policy Makers | Corporate StakeHolders
                    </p>
                </div>
            </div>
            <Link to='/register' className='btn__green'>Register Now</Link>
        </div>
    </div>
  )
}

export default Hero