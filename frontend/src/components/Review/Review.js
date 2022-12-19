import React from 'react'
import './review.css'

const Review = () => {
    return (
        <section className="review" id="review">

            <h1 className="heading"> customer's <span>review</span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src="images/quote-img.png" alt="" className="quote" />
                    <p>My wife and sons clean their plates every meal and tell me how delicious it was. And our financial budget has been cut in half. Honestly I love this company and I am so grateful for you. Thank you so much.</p>
                    <img src="images/pic-1.png" className="user" alt="" />
                    <h3>Cuong Quach</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>

                <div className="box">
                    <img src="images/quote-img.png" alt="" className="quote" />
                    <p>FreshExpress has allowed me to enjoy cooking, eat better and save money! I am not making unnecessary purchases at the grocery store and overspending. Preparation of meals is quick and the food is delicious!</p>
                    <img src="images/pic-2.png" className="user" alt="" />
                    <h3>Linh Ho</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="box">
                    <img src="images/quote-img.png" alt="" className="quote" />
                    <p>The FreshExpress Company bring these products straight to your doorstep, always ensuring that no quality or freshness is lost along the way. Michelin-star food and drink has never been so accessible.</p>
                    <img src="images/pic-3.png" className="user" alt="" />
                    <h3>john Cena</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Review