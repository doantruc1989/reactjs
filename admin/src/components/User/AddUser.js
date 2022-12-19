import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const AddUser = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [email, setEmail] = useState();
    const [image, setImage] = useState();

    const [success, setSuccess] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/user";

    const onFinish = () => {
        try {
            axios.post(`http://localhost:3001/admin/createNewUser`, JSON.stringify({
                username,
                password,
                role,
                email,
                image,

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
                        <Link to='user'>User Table</Link>
                    </p>
                </section>
            ) :
                (<section className='form__addnew'>
                    <h1>Add new User</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        autoComplete="off"
                        onFinish={onFinish}
                    >
                        <Form.Item name="username">
                            <Input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="username" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password" />
                        </Form.Item>
                        <Form.Item name="role">
                            <Input
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                placeholder="role" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ type: 'email' }]}>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email" />
                        </Form.Item>
                        <Form.Item name="image">
                            <Input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="image" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Add new User
                            </Button>
                        </Form.Item>
                    </Form>
                </section>)}
        </>
    );
}

export default AddUser