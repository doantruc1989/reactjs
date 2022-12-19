import React from 'react'
import './about.css'
import { FaClock, FaMoneyBill, FaLeaf } from 'react-icons/fa'

const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="heading"> <span>about</span> us </h1>
            <div className="row">
                <div className="image">
                    <img src="images/blog-img-02.jpg" alt="" />
                </div>
                <div className="content">
                    <h3>what makes our fruit special?</h3>
                    <p><FaClock /> Time saver We deliver everything you need to create delicious dinners from scratch so you spend less time shopping!</p>
                    <p><FaMoneyBill /> Value for money We work closely with our trusted suppliers to source fresh, high-quality ingredients.</p>
                    <p><FaLeaf /> Balance Your CO2 Footprint FreshExpress is the first global carbon-neutral meal kit company, supporting global and local environmentally-friendly projects you care about.</p>
                    <a href="#" className="btn">learn more</a>
                </div>
            </div>
        </section>
    )
}

export default About