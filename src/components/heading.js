import React, { Component } from 'react';

class Heading extends Component {
  //
  // return color red if in this page is errors
  // return color green if in this page is success
  // 
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