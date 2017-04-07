import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Row extends Component {
  render(){
    const row = this.props.row;
    
    return(
      <tr className="tr-style">
        <td>
          <Link 
            to={{
              pathname: '/rows/'+row.id,
              search: '?sort=name',
              hash: '#the-hash',
              state: {fromDashboard: false}
            }}
          >{row.id}</Link></td>
        <td>{row.when}</td>
        <td>{row.who}</td>
        <td>{row.description}</td>
      </tr>
    );
  }
}

export default Row;