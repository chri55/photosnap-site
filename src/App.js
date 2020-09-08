import React from 'react';
import {
  BrowserRouter,
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/home.jsx';
import Stories from './pages/stories/stories.jsx';
import Features from './pages/features/features.jsx';
import Pricing from './pages/pricing/pricing.jsx';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/stories">
            <Stories></Stories>
          </Route>
          <Route path="/features">
            <Features></Features>
          </Route>
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
