import React, { Component } from 'react'

// react-bootstrap reactstrap
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: props.dish
        }
    }
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else return (<div></div> );
    }
    render() {
        console.log('im here')
        if (this.state.dish != null)
            return (
                    <Container>
                        <Row>
                            <Col md={6} xs={12}>{this.renderDish(this.state.dish)}</Col>
                            <Col md={6} xs={12} >
                                <h4>comments</h4>
                                <h4>comments</h4>
                                <h4>comments</h4>
                                <h4>comments</h4>
                                </Col>
                        </Row>
                    </Container>
            );
        else
            return (
                <div></div>
            );
    }
}


export default Dishdetail