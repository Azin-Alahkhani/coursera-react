import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar, NavbarBrand } from "reactstrap";

import Menu from "./MenuComponent";
import DishDetail from "./DishDetail";
import { DISHES } from "./dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import {LEADERS} from './Leaders'
import {PROMOTIONS} from './promotions'
import {COMMENTS} from './comments'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  

  render() {
    const HomePage = () => {
      return <Home
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />;
    };
    return (
      <div>
        <Header />
        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        /> */}
         <Routes>
         <Route exact path='/' element={<Menu dishes={this.state.dishes} />} />
          <Route path='/home' element={<HomePage props={this.state}/>} />
          <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
          <Route exact path='/contactus' element={<Contact />} />
          <Route path='/menu/:dishId' element={<DishWithId />} />
        </Routes>
        <Footer />
       
      </div>
    );
  }
}

const DishWithId = ({match}) => {
  return(
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
  );
};

export default Main;
