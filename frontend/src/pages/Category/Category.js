import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Navbar2 from '../../components/Navbar/Navbar2'
import { useCart } from 'react-use-cart'

function Products() {
    const { loading, data } = useFetch()
    const [page, setPage] = useState(0)
    const [products, setProducts] = useState([])
    const { addItem } = useCart();

    useEffect(() => {
        if (loading) return
        setProducts(data[page])
    }, [loading, page])

    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1
            if (nextPage > data.length - 1) {
                nextPage = 0
            }
            return nextPage
        })
    }
    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1
            if (prevPage < 0) {
                prevPage = data.length - 1
            }
            return prevPage
        })
    }

    const handlePage = (index) => {
        setPage(index)
    }

    return (
        <main>
            <Navbar2 />
            <div className='section-title'>
                <h1>{loading ? 'loading...' : 'Our Product'}</h1>
                <div className='underline'></div>
            </div>


            <section className="products" id="products">
                <div className="box-container">
                    {products.map((product) => {
                        return (
                            <div className="box">
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
                                    <h4>{product.content}</h4>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="price">{product.price} <span>{product.price}</span></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>



            {!loading && (
                <div className='btn-container'>
                    <button className='prev-btn' onClick={prevPage}>
                        prev
                    </button>
                    {data.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={`page-btn ${index === page ? 'active-btn' : null}`}
                                onClick={() => handlePage(index)}
                            >
                                {index + 1}
                            </button>
                        )
                    })}
                    <button className='next-btn' onClick={nextPage}>
                        next
                    </button>
                </div>
            )}

        </main>
    )
}

export default Products
