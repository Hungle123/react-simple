import React, { Component } from 'react';

class Row extends Component {
  render(){
    const row = this.props.row;
    
    return(
      <tr className="tr-style">
        <td>{row.when}</td>
        <td>{row.who}</td>
        <td>{row.description}</td>
      </tr>
    );
  }
}

export default Row;