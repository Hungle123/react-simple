import React, { Component } from 'react';
class Heading extends Component {
  typeColor(){
    const success = {
      color: 'hotpink',
    };

    const error = {
      color: 'red',
    };

    if(this.props.type === true){
      return success;
    } else {
      return error;
    }
  };
  
  // render page with component header
  render(){
    const header = this.props.header;
    const styleColor = this.typeColor();
    return(
      <th style={styleColor}>
        {header}
      </th>
    );
  }
}

export default Heading;