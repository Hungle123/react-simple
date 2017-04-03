import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from 'react-router'
import App from './App';
import CommentApp from './Comment';
import './index.css';

var data = [{ "when": "2 minutes ago",
                "who": "Jill Dupre",
                "description": "Created new account"
                },
                {
                  "when": "1 hour ago",
                  "who": "Lose White",
                  "description": "Added fist chapter"
                },
                {
                  "when": "2 hours ago",
                  "who": "Jordan Whash",
                  "description": "Created new account"
                }];
var headers = ['When', 'Who', 'Description']
var title = 'ReactJS'

var props = {headers: headers, data: data};

ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {App}/>
   </Router>
), document.getElementById('root'))