// react
import React , {Component} from 'react'

//reactstrap
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import { DISHES } from './dishes'
import Menu from './MenuComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return(
      <div >
    <Navbar dark color='primary'>
      <div className='container'>
      <NavbarBrand href='/'>my fooood application </NavbarBrand>
      </div>
    </Navbar>
    <Menu dishes={this.state.dishes} />

  </div>
    )
  }
}


export default App;
