import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <nav className="nav footer-simple-app">
        <ul className="nav nav-pills">
          <li className="pull-left"> Copyright &hearts; hunglt@gmail.com</li>
          <li className="pull-right"> React version 1.0 &hearts; &hearts; &hearts; </li>
         </ul>      
      </nav>
    );
  }
}

export default Footer;