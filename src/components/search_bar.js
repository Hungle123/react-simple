import React, { Component } from 'react';
class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {term : 'reactjs'};    
  }

  render() {
    const logo = require('../../public/image/logo.png');
    return (
      <div className="search-bar col-md-12">
        <div className="logo-youtube col-md-2">
          <a href="/" id="logo-container" title="YouTube Home">  
            <img src={logo} alt=""/>
            <span>VN</span>
          </a>
        </div>

        <div className="search-form col-md-9">
          <input type="text" placeholder="Search..." 
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)}/>
        </div>
        <div className="sign-in col-md-1">Sign in</div>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
