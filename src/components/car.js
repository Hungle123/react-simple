import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Car extends Component {
    constructor(props) {
        super(props);
    }

  render(){
    const cars = this.props.data;

    const carNode = cars.map((car) => {
        return (
             <NavLink
                to={"/cars/"+car.id}
                className="list-group-item"
                key={car.id}>
                {car.name}
            </NavLink>
        );
    });
    return (
        <div>
            <h1>Cars page</h1>
            <div className="list-group">
                {carNode}
            </div>
        </div>
    );
  }
}

export default Car;