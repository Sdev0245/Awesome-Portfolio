import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar'
import Contact from './Components/Contact/Contact';
import {Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Route path="/contact" exact="true">
         <Contact />
      </Route>
        <Route path="/" exact="true">
          <Header/> 
        </Route>
 
    </React.Fragment>
  );
}

export default App;
