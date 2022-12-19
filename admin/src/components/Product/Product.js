import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Pagination, Table, Form, Input, Button, Modal, } from 'antd';
import { SaveOutlined, EditOutlined, DeleteOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [editingRow, setEditingRow] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        try {
            axios.get(`http://localhost:3001/product?page=${currentPage}`)
                .then((response => {
                    setProducts(response.data.map(row => ({
                        id: row.id,
                        productName: row.productName,
                        price: row.price,
                        quantity: row.quantity,
                        content: row.content,
                        image: row.image,
                        category: row.category
                    })))
                }));
        } catch (error) {
            console.log(error)
        }
    }, [currentPage, products])

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
            title: 'ProductName',
            dataIndex: 'productName',
            width: 'auto',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="productName"
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
            title: 'Price',
            dataIndex: 'price',
            width: 80,
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="price"
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
            title: 'Quantity',
            dataIndex: 'quantity',
            width: 100,
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="quantity"
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
            title: 'Content',
            dataIndex: 'content',
            ellipsis: true,
            width: 'auto',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="content"
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
            title: 'Category',
            dataIndex: 'category',
            width: 120,
            render: (text, record) => {
                if (editingRow === record.id) {
                    return (
                        <Form.Item
                            name="category"
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
            title: 'Action',
            render: (_, record) => {
                return (
                    <>
                        <Button
                            type="link"
                            onClick={() => {
                                setEditingRow(record.id);
                                form.setFieldsValue({
                                    id: record.id,
                                    productName: record.productName,
                                    price: record.price,
                                    quantity: record.quantity,
                                    image: record.image,
                                    category: record.category,
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
                                    title: "Are you sure to delete this product record?",
                                    okText: "Yes",
                                    okType: "danger",
                                    onOk: () => {
                                        setEditingRow(record.id)
                                        try {
                                            axios.delete(`http://localhost:3001/product/${record.id}`)
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    },
                                });
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
        const updatedDataSource = [...products];
        setProducts(updatedDataSource);
        setEditingRow(null);
        try {
            axios.post(`http://localhost:3001/product/${values.id}`,
                values,
            );
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div>
            <h1>Product Table</h1>
            <Button><Link to='addnewProduct'>Add new Product</Link></Button>
            <Form form={form} onFinish={onFinish}>
                <Table
                    bordered
                    columns={columns}
                    dataSource={products}
                    pagination={false} />
            </Form>

            {/* {products.map((product, index) => (
                <div key={index}>
                    {product.productName}
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

export default Product