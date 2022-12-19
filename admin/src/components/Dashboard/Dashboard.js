import React from 'react'
import { Col, Row, Card } from 'antd';
import './dashboard.css'
import Chart from '../Chart/Chart';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Row gutter={[24, 24]} className='Cards'>
                <Col span={8} className='parentContainer'>
                    <Card className='CompactCard'>
                        <h2>Total Sales</h2>
                        <h5>$ 50</h5>
                    </Card>
                </Col>
                <Col span={8} className='parentContainer'>
                    <Card className='CompactCard'>
                        <h2>Total Revenue</h2>
                        <h5>$15</h5>
                    </Card>
                </Col>
                <Col span={8} className='parentContainer'>
                    <Card className='CompactCard'>
                        <h2>This week's orders</h2>
                        <h5>50</h5>
                    </Card>
                </Col>
            </Row>
            <Chart />
        </div>
    )
}

export default Dashboard