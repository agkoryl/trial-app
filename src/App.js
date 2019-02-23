import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Beers from './Beers';
import Form from './Form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Beers} />
            <Route path="/create" component={Form} />
            <Route path="/update/:beerId" component={Form} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
