import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        try {
            axios.get('http://localhost:3001/listcategory')
                .then((response => {
                    setCategories(response.data)
                }))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <section className="menu" id="menu">

            <h1 className="heading"> our <span>Categories</span> </h1>

            <div className="box-container">
                {categories.map((category => {
                    return (
                        <div className="box" key={category.id}>
                            <Link to={category.path}>
                                <img src={category.image} alt={category.category} />
                            </Link>

                            <h3>{category.category}</h3>

                        </div>
                    )
                }))}

            </div>

        </section>
    )
}

export default Menu