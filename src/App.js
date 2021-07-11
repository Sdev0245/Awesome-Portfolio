import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar'
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <React.Fragment>
      {/* <Navbar/>
      <Header/> */}

      <Contact></Contact>
    </React.Fragment>
  );
}

export default App;
