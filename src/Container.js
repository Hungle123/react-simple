import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../public/style/style.css';
import Footer from './components/footer';
class Container extends Component {
   render() {
      return (
        <div>
          <nav className="navbar navbar-inverse navbar-static-top">
            <ul className="nav nav-pills">
              <li className="logo-app"><NavLink to="/"><img src="https://d1xwtr0qwr70yv.cloudfront.net/assets/elements/logo-mobile-5597add42dbadaf5a6db51e8546cb282.svg" alt=""/></NavLink></li> 
              <li><NavLink activeClassName="selected" to="/home">Home</NavLink></li>
              <li><NavLink activeClassName="selected" to="/comment">Comment</NavLink></li>
              <li><NavLink activeClassName="selected" to="/cars">Cars</NavLink></li>
              <li><NavLink activeClassName="selected" to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
          <div>
            {this.props.children}
          </div>
          <div className="clearfix"></div>
          <Footer/> 
        </div>    
      )
   }
}

export default Container;
