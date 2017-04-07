import React, { Component } from 'react';

class RowDetail extends Component {
  render() {
    const id = this.props.rows.params.id;
    return (
      <h1>Row Detail ...{id}</h1>
    );
  }
}

export default RowDetail;