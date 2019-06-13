import React from 'react';
import Product from './Product';
import { Row, Col } from 'react-bootstrap';

function ProductList(props) {
    return (
        <Row>
            { props.items && props.items.length > 0
                ? props.items.map(item => 
                    <Col className="centered" key={item.id.toString()}>
                        <Product item={item}/>
                    </Col>
                )
                : <p style={{margin: '0 auto'}}>Loading</p>
            }
        </Row>
    );
}

export default ProductList;
