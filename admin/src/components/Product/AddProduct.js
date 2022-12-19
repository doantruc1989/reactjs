import React, { useState } from 'react'
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom'


const AddProduct = () => {
    const [productName, setProductname] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [content, setContent] = useState();
    const [image, setImage] = useState();
    const [category, setCategory] = useState();
    const [success, setSuccess] = useState(false);


    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/product";

    const onFinish = () => {
        try {
            axios.post(`http://localhost:3001/product/createNewProduct`, JSON.stringify({
                productName,
                price,
                quantity,
                content,
                image,
                category
            }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })
            setSuccess(true);
            navigate(from, { replace: true });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <Link to='product'>Product Table</Link>
                    </p>
                </section>
            ) :
                (<section className='form__addnew'>
                    <h1>Add new Product</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        autoComplete="off"
                        onFinish={onFinish}
                    >
                        <Form.Item name="productName">
                            <Input
                                value={productName}
                                onChange={(e) => setProductname(e.target.value)}
                                placeholder="ProductName" />
                        </Form.Item>
                        <Form.Item name="price">
                            <Input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="price" />
                        </Form.Item>
                        <Form.Item name="quantity">
                            <Input
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder="quantity" />
                        </Form.Item>
                        <Form.Item name="content">
                            <Input
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="content" />
                        </Form.Item>
                        <Form.Item name="image">
                            <Input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="image" />
                        </Form.Item>
                        <Form.Item name="category">
                            <Input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="category" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Add new Product
                            </Button>
                        </Form.Item>
                    </Form>
                </section>)}
        </>
    );
}

export default AddProduct