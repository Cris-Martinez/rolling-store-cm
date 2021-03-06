import React, { Component } from 'react'
import ProductCard from '../components/ProductCard';
import CommonCarousel from '../common/Carousel';
import { Layout, Row, Col } from'antd';

const { Content } = Layout;

export class Main extends Component {
    render() {
        const { products } = this.props;
        return (
            <Layout>               
                <CommonCarousel/>
                <Content className="content">
                    <p>Relacionado con tus visitas</p>
                    <Row style={{textAlign: 'center', marginLeft: 45}}>
                    {products.map(prod =>(
                        <Col key={prod.id} xs={{span:24}} lg={{span:6}}>
                            <ProductCard product={prod}/>
                        </Col>
                    ))}                   
                    </Row>
                </Content>
            </Layout>           
        );
    }
}

export default Main
