import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar'
import Contact from './Components/Contact/Contact';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
          <Route path="/">
            <Header/> 
          </Route>
    </Switch>
    </React.Fragment>
  );
}

export default App;
