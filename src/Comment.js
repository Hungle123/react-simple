import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style/style.css';
import $ from 'jquery';
import Heading from './components/heading';
import Row from './components/row';


class CommentApp extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      headers: ['Updated At', 'Author', 'Change'],
      color: '#ccc',
      currentEvent: '---'
    };
    this.update = this.update.bind(this);
  };
  
  update(e){
    this.setState({
      currentEvent: e.type
    });
  }

  static propTypes = {
    customProps: (props, propName, componentName) => {
       if(!propName === 'headers') {
        return new Error(`Validation fails, Please input value is correctlly! ${componentName}`);
       }
    }
  };

  static defaultProps = {
    headers: ['When1', 'Who1', 'Description1']
  };
  
  mapOpenLibraryDataToChangeSet(data){
    return data.map((change, index) => {
      return {
        "when": change.timestamp,
        "who": change.author.key,
        "description": change.comment
      }
    });
  };

  componentWillMount(){
    let url = 'http://openlibrary.org/recentchanges.json?limit=10';
    $.ajax({
      url: url,
      context: this,
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        let result = this.mapOpenLibraryDataToChangeSet(data);
        this.setState({data: result});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  };

  setValueInput(e){
    this.setState({
      color: e.target.value
    });
  };

  render(){
    const dataChange = this.state.data;
    const title = this.props.title;
    const author = this.props.author;    
    const headers = this.state.headers.map((item, index) => {
      return(
        <Heading key={index} header={item} type={true}/>
      );
    }); 

    const rows = dataChange.map((row, index) => {
      return(
        <Row  key={index} row={row}/>
      );
    });

    let styleBox = {
      width: '200px',
      height: '200px', 
      backgroundColor: this.state.color,
      margin: '20px auto'
    };

    return(
      <section>
      {/* -- Create menu for your app -- */}
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {this.props.children}
      </div>
      {/* -- END menu -- */}

        <h1>{title}</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <hr/>
        <input type="text" value={this.state.color} onChange={this.setValueInput.bind(this)}/>
        <div style={styleBox}>
          <Button>I <Heart/> React</Button>
        </div>
        <hr/> 
        <div style={styleBox}>
          <textarea
            onKeyPress={this.update}
            onCopy={this.update}
            onCut={this.update}
            onFocus={this.update}
            onPaste={this.update}
            onBlur={this.update}
            onDoubleClick={this.update}
            onTouchStart={this.update}
            onTouchMove={this.update}
            onTouchEnd={this.update}
            cols="30" 
            rows="10"
            />
          <h1>{this.state.currentEvent}</h1>
        </div>
      </section>
    );
  }
}

const Button = (props) => <button className='btn btn-success btn-react'>{props.children}</button>

class Heart extends Component {
  render(){
    return(
      <span className='color-heart'>&hearts;</span>
    );
  }
}

CommentApp.propTypes = {
  color(props, propName, componentName){
    if(!props.title === 'ReactJS'){
      return new Error(`Custom message validate for props title!`);
    }
  }
}
export default CommentApp;