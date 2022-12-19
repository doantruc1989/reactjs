import React, { useState, useEffect } from 'react';
import './blog.css';
import axios from 'axios';


const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        try {
            axios.get('http://localhost:3001/blog')
                .then((response) => {
                    setBlogs(response.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <section className="blogs" id="blogs">
            <h1 className="heading"> our <span>blogs</span> </h1>
            <div className="box-container">
                {blogs.map((blog) => {
                    return (
                        <div className="box" key={blog.id}>
                            <div className="image">
                                <img src={blog.image} alt={blog.title} />
                            </div>
                            <div className="content">
                                <a href="#" className="title">{blog.title}</a>
                                <p>{blog.littlecontent}</p>
                                <a href={'/blog/' + blog.id} className="btn">read more</a>
                            </div>
                        </div>
                    )
                })}

            </div>

        </section>
    )
}

export default Blog