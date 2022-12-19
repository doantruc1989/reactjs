import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section className="contact" id="contact">

            <h1 className="heading"> <span>contact</span> us </h1>

            <div className="row">

                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

                <form action="">
                    <h3>get in touch</h3>
                    <div className="inputBox">
                        <span className="fas fa-user"></span>
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="inputBox">
                        <span className="fas fa-envelope"></span>
                        <input type="email" placeholder="email" />
                    </div>
                    <div className="inputBox">
                        <span className="fas fa-phone"></span>
                        <input type="number" placeholder="number" />
                    </div>
                    <input type="submit" value="contact now" className="btn" />
                </form>

            </div>

        </section>
    )
}

export default Contact