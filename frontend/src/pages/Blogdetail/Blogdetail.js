import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './blogdetail.css'
import Navbar2 from '../../components/Navbar/Navbar2';

const Blogdetail = () => {
    const [blogdetail, setBlogdetail] = useState([]);
    const { blogid } = useParams();

    useEffect(() => {
        try {
            axios.get(`http://localhost:3001/blog/${blogid}`)
                .then((response) => {
                    setBlogdetail(response.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <Navbar2 />
            <section className="blogdetail">

                <div className="blogdetail-container">
                    <h1>{blogdetail.title}</h1>
                    <img src={blogdetail.image} />
                    <p>{blogdetail.content}</p>
                </div>
            </section>
        </>
    )
}

export default Blogdetail