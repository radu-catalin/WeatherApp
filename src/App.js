import React, { Component } from 'react';
import Search from './components/Search';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="container">
            <div className="weather-content">
              <Search />
              <Content/>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
