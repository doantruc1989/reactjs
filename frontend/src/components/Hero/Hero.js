import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="home" id="home">
            <div className="content">
                <h3>We save your serious time</h3>
                <p>Good for you. Better for the planet.
                    Best for your wallet.</p>
                <Link to="/product" className="btn">Shop now</Link>
            </div>
        </section>
    )
}

export default Hero