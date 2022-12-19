import React, { useState, useEffect } from 'react'
import './product.css'
import axios from 'axios'
import { useCart } from 'react-use-cart'


const Product = () => {
    const { addItem } = useCart();
    const [products, setProducts] = useState([])

    useEffect(() => {
        try {
            axios.get("http://localhost:3001/getSixproduct")
                .then((response => {
                    setProducts(response.data)
                }))

        } catch (error) {
            console.log(error)
        }
    }, [])

    return (

        <section className="products" id="products">
            <h1 className="heading"><a href='/product'><span>our products</span></a></h1>
            <div className="box-container">
                {products.map((product) => {
                    return (
                        <div className="box" key={product.id}>
                            <div className="icons">
                                <a className="fas fa-shopping-cart" onClick={() => addItem(product)}></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={product.image} alt={product.productName} />
                            </div>
                            <div className="content">
                                <h3>{product.productName}</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="price">$ {product.price} <span>$20.99</span></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>

    )
}

export default Product