import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route, Link, NavLink, Switch, Prompt, Redirect} from 'react-router-dom';
import App from './App';
import Comment from './Comment';
import Container from './Container';
import Home from './components/home';
import Car from './components/car';
import CarDetail from './components/car_detail';
import Contact from './components/contact';
import RowDetail from './components/row_detail';
import NotFound from './components/404';
import './index.css';

const data = [{ "when": "2 minutes ago",
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

const data_test = [
          {
              id: 1,
              name: 'Honda Accord Crosstour',
              year: '2010',
              model: 'Accord Crosstour',
              make: 'Honda',
              media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
              price: '$16,811'

          },
          {
              id: 2,
              name: 'Mercedes-Benz AMG GT Coupe',
              year: '2016',
              model: 'AMG',
              make: 'Mercedes Benz',
              media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
              price: '$138,157'

          },
          {
              id: 3,
              name: 'BMW X6 SUV',
              year: '2016',
              model: 'X6',
              make: 'BMW',
              media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
              price: '$68,999'
          },
          {
              id: 4,
              name: 'Ford Edge SUV',
              year: '2016',
              model: 'Edge',
              make: 'Ford',
              media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
              price: '$36,275'
          },
          {
              id: 5,
              name: 'Dodge Viper Coupe',
              year: '2017',
              model: 'Viper',
              make: 'Dodge',
              media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
              price: '$123,890'
          }
      ];

const headers = ['Id', 'When', 'Who', 'Description'];
const title = 'ReactJS';
const props = {headers: headers, data: data};

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

const redirect = true;

ReactDOM.render((
    <Router 
    basename="/api"
    getUserConfirmation={getConfirmation}
    forceRefresh={false}
    keyLength={12}
    >
      <Container>
        <Prompt when={false} message="Are you sure you want to leave?"/>
        <Route exact path = "/" component = {App} />
        <Route path = "/comment" component = {Comment} />
        <Route path = "/rows/:id" component = {({ match }) => <RowDetail rows={match}/>} />
        <Route path = "/home" render={() => redirect ? <Redirect to="/cars"/> : <h1>Home ...</h1>}/>
        <Route path = "/cars" component = {() => <Car data={data_test} />}/>
        <Route path = "/cars/:id" component = {({ match }) => <CarDetail data={data_test} cars={match} />}/>
        <Route path = "/contact" component = {Contact} />
      </Container>
    </Router>
  ), document.getElementById('root')
);
