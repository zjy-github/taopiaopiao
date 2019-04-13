import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './routes/home/index';
import User from './routes/user/index';
import Detail from './routes/detail/index';
import Seat from './routes/seat';
import './index.css';
import './normalize.css';
import './common.css'; 

ReactDOM.render(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/user" exact component={User} />
              <Route path="/detail" exact component={Detail} />
              <Route path="/seat" exact component={Seat} />
          </Switch>
        </BrowserRouter>
, document.getElementById('root'));