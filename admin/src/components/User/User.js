import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Pagination, Table, Form, Input, Button, Modal } from 'antd';
import { SaveOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// const baseURL = 
const User = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [editingRow, setEditingRow] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        try {
            axios.get(`http://localhost:3001/admin?page=${currentPage}`)
                .then(
                    (response => {
                        setUsers(response.data.map(row => ({
                            id: row.id,
                            username: row.username,
                            role: row.role,
                            image: row.image,
                            email: row.email
                        })))
                    }))
        } catch (error) {
            console.log(error)
        }
    }, [currentPage, users])

    const columns = [
        {
            title: "id",
            dataIndex: "id",
            width: 50,
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="id"
                        >
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: 'UserName',
            dataIndex: 'username',
            width: 'auto',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="username"
                        >
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: 'Role',
            dataIndex: 'role',
            width: 100,
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="role"
                        >
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: 'Image',
            dataIndex: 'image',
            ellipsis: true,
            width: 'auto',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="image"
                        >
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            ellipsis: true,
            width: 'auto',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="email"
                        >
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Actions",
            render: (_, record) => {
                return (
                    <>
                        <Button
                            type="link"
                            onClick={() => {
                                setEditingRow(record.id);
                                form.setFieldsValue({
                                    id: record.id,
                                    username: record.username,
                                    role: record.role,
                                    image: record.image,
                                    email: record.email,
                                });
                            }}
                        >
                            <EditOutlined style={{ fontSize: '20px' }} />
                        </Button>
                        <Button type="link" htmlType="submit">
                            <SaveOutlined style={{ fontSize: '20px' }} />
                        </Button>
                        <Button
                            type="link"
                            onClick={() => {
                                Modal.confirm({
                                    title: "Are you sure to delete this user record?",
                                    okText: "Yes",
                                    okType: "danger",
                                    onOk: () => {
                                        setEditingRow(record.id);
                                        try {
                                            axios.delete(`http://localhost:3001/admin/deleteUser/${record.id}`)
                                        } catch (error) {
                                            console.log(error)
                                        }

                                    }
                                }
                                )
                            }}
                        >
                            <DeleteOutlined style={{ fontSize: '20px' }} />
                        </Button>
                    </>
                );
            },
        },
    ];


    const onChange = (current) => {
        setcurrentPage(current);
    };

    const onFinish = (values) => {
        const updatedDataSource = [...users];
        setUsers(updatedDataSource);
        setEditingRow(null);
        try {
            axios.patch(`http://localhost:3001/admin/editUser/${values.id}`,
                values,
            );
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <h1>User Table</h1>
            <Button><Link to='addnewUser'>Add new User</Link></Button>
            <Form form={form} onFinish={onFinish}>
                <Table
                    bordered
                    columns={columns}
                    dataSource={users}
                    pagination={false} />
            </Form>
            {/* {users.map((user, index) => (
                <div key={index}>
                    {user.username}
                </div>
            ))} */}

            <Pagination
                className='pagination'
                responsive={true}
                current={currentPage}
                onChange={onChange}
                total={50} />
        </div>
    )
}

export default User