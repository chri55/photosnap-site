import React from 'react';
import {
  BrowserRouter,
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './pages/home/home.jsx';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/stories">
            <div className="feature">Stories</div>
          </Route>
          <Route path="/features">
            <div className="feature">Features</div>
          </Route>
          <Route path="/pricing">
            <div className="feature">Pricing</div>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
