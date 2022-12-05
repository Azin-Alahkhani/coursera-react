import React, { Component, useState } from 'react'

// react-bootstrap reactstrap
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { COMMENTS } from './comments'
//  const  DishDetail = (props) => {
//         this.state = {
//             dish: props.dish
//         }
//     }

function DishDetail(props) {
    const Dish = props.dish
    console.log(props.dish)
    return (render(Dish))
}

function renderDish(dish) {
    if (dish != undefined) {
        console.log(dish)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        console.log('stuck1')
        return (<div></div>)
    };
}
function render(dish) {

    if (dish != undefined)
        return (
            <Container>
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>                
                </Row>
                <Row>
                    <Col md={6} xs={12}>{renderDish(dish)}</Col>
                    <Col md={6} xs={12} >
                        {renderComments(dish.id)}
                    </Col>
                </Row>
            </Container>
        );
    else
        return (
            <div></div>
        );
}
function renderComments(DishId) {
    return (
        <>
         {
                COMMENTS.map(comment => {
                    if (comment.dishId == DishId) {
                        return ( <Card key={comment.id}>
                            <CardBody>
                                <CardTitle>{comment.author}</CardTitle>
                                <CardText>{comment.comment}</CardText>
                                {/* <h4>posted at: {comment.date}</h4>
                                <h4>rated: {comment.rating}</h4> */}
                            </CardBody>
                        </Card>
                       )
                    }
                })
            }
        </>
    )
}
export default DishDetail