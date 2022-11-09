// react
import React, { Component, useState } from 'react';

// reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
  Media
} from 'reactstrap';

import Dishdetail from './DishDetail'

class Menu extends Component {

  dishes = []
  constructor(props) {
    super(props);
    this.dishes = props
    this.state = {
      selectedDish: null
    }
  }
  onDishSelect(dish) {
    this.setState({
      selectedDish: dish
    });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 ">
          <Media onClick={() => this.onDishSelect(dish)}>
            <Media left middle>
              <Media object src={dish.image} className="col-2"/>
            </Media>
            <Media body className='col-10'>
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
); });
    return (
      <div className="container">
        <div className="row">
          <Media list>
            {menu}
          </Media>
        </div>
        <div className="row">
          <div className="col-12 ">
            <Dishdetail key={this.state.selectedDish} dish={this.state.selectedDish} ></Dishdetail>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;