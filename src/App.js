// react
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

//reactstrap
import { Navbar, NavbarBrand } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import { DISHES } from "./dishes";
import Menu from "./MenuComponent";
import Main from "./mainComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
