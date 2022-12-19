import './App.css'

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BarChartOutlined,
  UserOutlined,
  ShoppingOutlined,
  HomeOutlined,
  CheckOutlined,
  DollarOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Col, Row, Button } from 'antd';
import User from './components/User/User';
import Product from './components/Product/Product';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route, Link, } from 'react-router-dom';
import Chart from './components/Chart/Chart';
import AddProduct from './components/Product/AddProduct';
import AddUser from './components/User/AddUser';
import Logo from "./imgs/logo.png";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState();


  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed} className='sidebar'>
        <div className="logo">
          <img src={Logo} alt="logo" />

        </div>
        <Menu
          className='menu'
          theme="dark"
          mode="inline"
          onClick={onClick}
          selectedKeys={[current]}
          items={[
            {
              className: 'menuItem',
              key: '1',
              icon: <HomeOutlined />,
              label: <Link to=''>DashBoard</Link>,
            },
            {
              className: 'menuItem',
              key: '2',
              icon: <UserOutlined />,
              label: <Link to='user'>User Table</Link>,
            },
            {
              className: 'menuItem',
              key: '3',
              icon: <ShoppingOutlined />,
              label: <Link to='product'>Product Table</Link>,
            },
            {
              className: 'menuItem',
              key: '4',
              icon: <CheckOutlined />,
              label: <Link to='order'>Order Table</Link>,
            },
            {
              className: 'menuItem',
              key: '5',
              icon: <RiseOutlined />,
              label: <Link to='sales'>Sales</Link>,
            },
            {
              className: 'menuItem',
              key: '6',
              icon: <DollarOutlined />,
              label: <Link to='revenue'>Revenue</Link>,
            },
            {
              className: 'menuItem',
              key: '7',
              icon: <BarChartOutlined />,
              label: <Link to='chart'>Chart</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">

        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className='navbar'>
            <Row gutter={[24, 24]}>
              <Col span={18}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                })}
              </Col>
              <Col span={6} className='navbar__username'>
                <p>Welcome back </p>
                <Button>Logout</Button>
              </Col>
            </Row>
          </div>
        </Header>

        <Content
          style={{
            margin: '60px 16px',
            padding: 24,
            minHeight: 480,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path='user' element={<User />} />
            <Route path='product' element={<Product />} />
            <Route path='product/addnewProduct' element={<AddProduct />} />
            <Route path='user/addnewUser' element={<AddUser />} />
            <Route path='' element={<Dashboard />} />
            <Route path='chart' element={<Chart />} />

          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
