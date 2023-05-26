import React from 'react';
import {Button, Form, Card, Row, Col, Image} from 'react-bootstrap';

const ProductCard = (props) => {

    const product = props.product;

  return (
    <>
    <Card>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>£{product.price}</Card.Text>
            <Card.Body><Image src={product.img} rounded  class="card-img-bottom" alt=""/></Card.Body>
            <Button variant="primary">Add To Cart</Button>
        </Card.Body>
        
       
    </Card>
    </>
  )
}

export default ProductCard;