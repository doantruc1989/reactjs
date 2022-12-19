import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Menu from '../../components/Menu/Menu'
import Product from '../../components/Product/Product'
import Review from '../../components/Review/Review'
import Contact from '../../components/Contact/Contact'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Menu />
            <Product />
            <Review />
            <Contact />
            <Blog />
            <Footer />
        </div>
    )
}

export default Home