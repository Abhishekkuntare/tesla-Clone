import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Order from './components/Order';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Start from './components/Start';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path='/start'>
            <Start />
          </Route>
          <Route exact path='/' >
            <Header />
            <Home />
          </Route>
          <Route exact path='/order'>
            <Order />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
