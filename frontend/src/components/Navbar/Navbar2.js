import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { linkProduct } from './links'
import './navbar.css'
import { useCart } from 'react-use-cart';
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const { totalItems } = useCart();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <header className="header">

            <a href="/" className="logo">
                <img src="images/logo2.png" alt="" />
            </a>
            {(toggleMenu || screenWidth > 768) && (
                <nav className="navbar">
                    {linkProduct.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <a key={id} href={url}>{text}</a>
                        )
                    })}
                </nav>
            )}

            <div className="icons">
                <button onClick={handleOpen}><FaUser className='react-icon' /></button>
                {open ? (
                    <div className="menu-container">
                        <Link to='/login' className="menu-item">Login</Link>
                        <Link to='/register' className="menu-item">Register</Link>
                    </div>
                ) : null}
                <Link to='/cart'>
                    <div className="fas fa-shopping-cart" id="cart-btn"></div >
                    <span>{totalItems}</span>
                </Link>
                <div className="fas fa-bars" id="menu-btn" onClick={toggleNav}></div>
            </div>
        </header>
    )
}

export default Navbar;